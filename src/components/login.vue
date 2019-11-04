<template>
    <div id="login">
        <div class="login_box">
            <div class="login_box_1">
                <img src="../images/logo_u57.png" alt="网维logo" class="login_box_1_Img">
                <span class="login_box_1_Span">网维工作室</span>
            </div>
            <div class="login_box_2">
                <el-input v-model="account" placeholder="请输入邮箱号"></el-input>
            </div>
            <div class="login_box_3">
                <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
            </div>
            <div class="login_box_4">
                <el-button @click="login">登 录</el-button>
            </div>
            <div class="login_box_5">
                <div class="rememberMe">
                    <el-switch
                            style="display: block"
                            v-model="rememberMe"
                            active-color="#BCBCBC"
                            inactive-color="#BCBCBC"
                            active-text="记住我">
                    </el-switch>
                </div>
                <div class="registerLink">
                    <el-link href="/#/register"  :underline="false">去注册</el-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Login',
        data() {
            return{
                account: '',
                password:'',
                rememberMe:true,
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
                    message: '用户名不存在',
                    type: 'error',
                    offset:80
                });
            },
            login:function () {
                let kgReg = /^\s*|\s*$/g;
                let emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
                this.account= this.account.replace(kgReg,"");//去掉开头和结尾的空格
                if (emailReg.test(this.account)===false){
                    this.open2();
                }else {
                    this.axios.get('https://myinterface.xuanzai.top/login', {
                        account:this.account,
                        //username:this.account,
                        password:this.password
                    })
                        .then((response)=>{
                            alert(response);
                        })
                        .catch((error)=>{
                            alert(error);
                            this.console.log(1)

                        });
                }
            }
        },
    }
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
    #login{
        position: relative;
        min-width: 1128px;
        height: 680px;
        background-color: rgba(247, 247, 247, 1);
        -moz-user-select:none; /*火狐*/
        -webkit-user-select:none; /*webkit浏览器*/
        -ms-user-select:none; /*IE10*/
        user-select:none;
        .login_box{
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
            .el-input__inner{
                height: 44px;
            }
            .login_box_1{
                position: absolute;
                top: 100px;
                text-align: center;
                width: 100%;
                height: 60px;
                .login_box_1_Img{
                    display: inline-block;
                    width: 108px;
                    height: 59px;vertical-align: middle;
                }
                .login_box_1_Span{
                    display: inline-block;
                    position: relative;
                    font-family: '黑体 Bold', '黑体 Regular', '黑体';
                    font-weight: 700;
                    font-style: normal;
                    font-size: 28px;
                    color: #515151;
                    vertical-align: middle;
                }
            }
            .login_box_2{
                position: absolute;
                width: 460px;
                height: 50px;
                top: 180px;
                left: 50%;
                margin-left: -230px;
            }
            .login_box_3{
                position: absolute;
                width: 460px;
                height: 50px;
                top: 235px;
                left: 50%;
                margin-left: -230px;
            }
            .login_box_4{
                position: absolute;
                top: 300px;
                left: 50%;
                margin-left: -230px;
                button{
                    width: 460px;
                    background-color:#990000;
                    color:white;
                    height: 57px;
                    outline:none;
                    border: none;
                    font-size: 20px;
                }
                button:active{
                    background-color: #d54a4e;
                }
            }
            .login_box_5{
                position: absolute;
                top: 390px;
                left: 50%;
                margin-left: -230px;
                width: 460px;
                .registerLink{
                    display: inline-block;
                    vertical-align: middle;
                    position: absolute;
                    right: 0;
                    line-height: 23px;
                    a{
                        color: #c72e30;
                    }
                    a:hover{
                        color: #990000;
                    }
                }
                .rememberMe{
                    display: inline-block;
                    width: 120px;
                    height: 23px;
                    vertical-align:middle;
                }
                .el-switch.is-checked .el-switch__core::after{
                    margin-left: -30px!important;
                    height: 23px;
                }
                .el-switch.is-checked .el-switch__core:after{
                    content: "关";
                }
                .el-switch{
                    span{
                        color: #990000!important;
                        vertical-align:middle;
                    }
                    .el-switch__core{
                        width: 60px!important;
                        height: 23px;
                        border-radius: 0;
                        border: none;
                        background-color: #BCBCBC;
                        background-clip: content-box;
                    }
                    .el-switch__core:after{
                        content: "开";
                        color: white;
                        line-height: 23px;
                        top: 0;
                        margin-left: -1px;
                    }
                    ::after{
                        width: 30px!important;
                        height: 23px;
                        border-radius: 0;
                        background-color: #c72e30;
                        border: none;
                        text-align: center;
                    }
                }
            }
        }
    }

</style>
