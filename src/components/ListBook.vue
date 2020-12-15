<template>
    <el-main style="height: 100%;border: 2px solid #eee">
        <div style="margin: 5px">
            <el-input placeholder="请输入内容" style="width: 30%;margin-right: 10px"></el-input>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="danger" style="float: right;margin-left: 5px" icon="el-icon-delete">批量删除</el-button>
            <el-button type="primary" style="float: right;margin-left: 5px" icon="el-icon-printer">打印</el-button>
            <el-button type="primary" style="float: right" icon="el-icon-document">导出</el-button>
        </div>
        <el-main style="height:83%;width: 100%">
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" height="100%" border @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="id" label="ID" width="120"></el-table-column>
                <el-table-column prop="title" label="名称" width="180"></el-table-column>
                <el-table-column prop="price" label="价格" width="150"></el-table-column>
                <el-table-column label="发布日期">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.publish_date }}</span>
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
            <el-pagination background style="float: right"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </div>
    </el-main>
</template>

<script>
    export default {
        name: "ListBook",
        data() {
            const item = {
                id:12,
                title: '测试书籍',
                price: '10.2',
                publish_date: '2016-05-02'
            };
            return {
                tableData:Array(20).fill(item),
                multipleSelection: [],
                currentPage4: 4
            }
        },

        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
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