<template>
    <el-main style="height: 100%;border: 2px solid #eee">
        <div style="margin: 5px">
            <el-input placeholder="请输入内容" style="width: 30%;margin-right: 10px"></el-input>
            <el-button type="primary" icon="el-icon-search" @click.native.prevent="Search(100,0)">搜索</el-button>
            <el-button type="danger" style="float: right;margin-left: 5px" icon="el-icon-delete">批量删除</el-button>
            <el-button type="primary" style="float: right;margin-left: 5px" icon="el-icon-printer">打印</el-button>
            <el-button type="primary" style="float: right" icon="el-icon-document">导出</el-button>
        </div>
        <el-main v-loading="loading" style="height:83%;width: 100%">
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" height="100%" border @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="id" label="ID" width="120"></el-table-column>
                <el-table-column prop="title" label="名称" width="380"></el-table-column>
                <el-table-column prop="price" label="价格" width="120"></el-table-column>
                <el-table-column label="发布日期">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.publishDate }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click.native.prevent="handleEdit(scope.$index, tableData)">编辑</el-button>
                        <el-button size="mini" type="danger" @click.native.prevent="handleDelete(scope.$index, tableData)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
        <div class="block" style="margin-top: 5px">
            <el-pagination background style="float: right" hide-on-single-page
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </div>
    </el-main>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "ListBook",
        data() {
            return {
                tableData:[],
                multipleSelection: [],
                currentPage: 1,
                pageSize:100,
                total:0,
                loading:false
            }
        },

        methods: {
            Search(limit,start) {
                this.loading=true;
                var url_queryCount = "http://localhost:8070/book/queryBookCount";
                axios
                    .get(url_queryCount)
                    .then(response => {this.total = response.data})
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    }).finally(() => {
                    this.loading = false
                });
                var url = "http://localhost:8070/book/queryBookByLimit?limit="+limit+"&start="+start;
                axios
                    .get(url)
                    .then(response => (this.tableData = response.data))
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    });
            },
            handleSizeChange(pageSize) {
                console.log(`每页 ${pageSize} 条`);
                this.Search(pageSize,(this.currentPage-1)*this.pageSize);
                this.pageSize=pageSize;
            },
            handleCurrentChange(currentPage) {
                console.log(`当前页: ${currentPage}`);
                this.currentPage=currentPage;
                this.Search(this.pageSize,(currentPage-1)*this.pageSize);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
                row.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
    .el-main{
        padding: 0px;
    }
</style>