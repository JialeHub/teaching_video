<template>
    <div id="register">
        <div class="register_box">
            <div class="register_boxIn">
                <div class="register_boxIn1">
                    <span>邮箱注册</span>
                </div>
                <div class="register_boxIn2">
                    <el-input v-model="account" placeholder="请输入邮箱号"></el-input>
                </div>
                <div class="register_boxIn3">
                    <el-input v-model="code" placeholder="请输入验证码"></el-input>
                    <el-button @click="getCode">获取验证码</el-button>
                </div>
                <div class="register_boxIn4">
                    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                </div>
                <div class="register_boxIn5">
                    <el-button @click="register">注 册</el-button>
                </div>
                <div class="loginLink">
                    <el-link href="./#/login"  :underline="false">去登录</el-link>
                </div>
            </div>
        </div>

        <el-dialog
                        title="提示"
                        :visible.sync="dialogVisible"
                        width="30%">
                    <span>{{messageBox}}</span>
                    <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>

    </div>

</template>

<script>
    export default {
        name: 'Register',
        data() {
            return{
                account: '',
                code:'',
                password:'',
                dialogVisible: false,
                messageBox:"",
            }
        },
        methods: {
            open1() {
                this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success',
                });
            },
            open2() {
                this.$message({
                    message: '请输入正确的邮箱地址',
                    type: 'error',
                    offset:80
                });
            },
            getCode:function(){
                let kgReg = /^\s*|\s*$/g;
                let emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
                this.account= this.account.replace(kgReg,"");//去掉开头和结尾的空格
                if (emailReg.test(this.account)===false){
                    this.open2();
                }else {
                    this.axios.post('http://129.204.189.149:8089/auth/sendEmail', {
                        username:"799670335@qq.com",
                    },{
                        headers:{'Content-Type':'application/x-www-form-urlencoded'},
                    })
                        .then((response)=>{
                            //alert(response.data.message);//799670335@qq.com
                            this.messageBox=response.data.message;
                            this.dialogVisible = true;
                        })
                        .catch((error)=>{
                            window.console.log(error);
                            this.messageBox=error;
                            this.dialogVisible=true;
                        });
                }
            },
            register:function () {
                let kgReg = /^\s*|\s*$/g;
                let emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
                this.account= this.account.replace(kgReg,"");//去掉开头和结尾的空格
                if (emailReg.test(this.account)===false){
                    this.open2();
                }else {
                    this.axios.post('http://129.204.189.149:8089/auth/register', {
                        username:this.account,
                        text:this.code,
                        password:this.password
                    })
                        .then((response)=>{
                            this.messageBox=response.data.message;
                            this.dialogVisible = true;
                        })
                        .catch((error)=>{
                            this.messageBox=error;
                            this.dialogVisible = true;
                        });
                }
            }
        }
    }
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
    #register{
        position: relative;
        min-width: 1128px;
        height: 680px;
        background-color: rgba(247, 247, 247, 1);
        -moz-user-select:none; /*火狐*/
        -webkit-user-select:none; /*webkit浏览器*/
        -ms-user-select:none; /*IE10*/
        user-select:none;
        .register_box{
            position: absolute;
            width: 1128px;
            height: 499px;
            background-color: rgba(255, 255, 255, 1);
            border: none;
            box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.349019607843137);
            top: 50%;
            margin-top: -250px;
            left:50%;
            margin-left: -564px;
            .register_boxIn{
                width: 470px;
                height: 100%;
                margin: 0 auto;
                position: relative;
                .el-input__inner{
                    height: 44px;
                    font-size: 13px;
                    outline-style: none;
                }
                .el-button{
                    height: 42px;
                    background-color: #990000;
                    border: none;
                    color: #fff;
                }
                .el-button:active{
                    background-color: rgba(213,74,78,1);
                }
                .register_boxIn1{
                    font-size: 24px;
                    color: #333333;
                    margin-top: 50px;
                    margin-left: 5px;
                }
                .register_boxIn2{
                    margin-top: 26px;
                }
                .register_boxIn3{
                    position: relative;
                    margin-top: 24px;
                    .el-input{
                        width: 310px;
                    }
                    .el-button{
                        margin-top: 1px;
                        position: absolute;
                        font-size: 16px;
                        width: 150px;
                        right: 0;
                    }
                }
                .register_boxIn4{
                    margin-top: 24px;
                }
                .register_boxIn5{
                    margin-top: 26px;
                    .el-button{
                        font-size: 20px;
                        width: 100%;
                        height: 57px;
                    }
                }
                .loginLink{
                    margin-top: 20px;
                     display: inline-block;
                     position: absolute;
                     right: 0;
                     line-height: 23px;
                     a{
                         color: #990000;
                     }
                 }
            }
        }
    }

</style>
