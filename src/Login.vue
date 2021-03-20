<template>
    <div id="box">
        <el-form id="from">
            <el-form-item label="手机号码" prop="userphone">
                <el-input type="username" v-model="userphone" placeholder="请输入手机号码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="登录密码" prop="password">
                <el-input type="password" v-model="password" placeholder="请输入密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button id="commit" type="primary" v-on:click="commit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                userphone: '',
                password: ''
            };

        },
        methods: {
            commit: function () {
                const self = this;
                self.$axios.post("user/login", self.$qs.stringify({
                    'userphone': self.userphone,
                    'password': self.$md5(self.password)
                })).then(function (response) {
                    alert(response)

                }).catch(function (error) {
                    alert(error)
                });
            }
        }
    }
</script>

<style scoped>
    #box {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #from {
        display: flex;
        width: 20%;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        flex-direction: column;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    #commit {
        display: flex;
        width: 100%;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>