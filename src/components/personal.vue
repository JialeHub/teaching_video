<template>
    <div id="personal">
        <div class="personalMain">
            <div class="personalMainBox">
                <div class="personalMainBoxP1">
                    <div class="personalMsgTitle">
                        <span>基本信息</span>
                    </div>
                    <div class="personalMsg1">
                        <div class="personalMsgName">
                            <span>昵称</span>
                        </div>
                        <div class="personalMsgNameInput">
                            <el-input v-model="personalMsgName" placeholder="请输入昵称..."></el-input>
                        </div>
                    </div>
                    <div class="personalMsg2">
                        <div class="personalMsgImgSpan">
                            <span>头像</span>
                        </div>
                        <div class="personalMsgImg">
                            <img :src="personalMsgImgSrc" alt="">
                        </div>
                        <div class="personalMsgImgR">
                            <div class="personalMsgImgSrcRText">支持jpg 、gif或png格式的图片，建议文件小于20Mb</div>
                            <div class="personalMsgImgRButton">
                                <el-button @click="imgEdit">修改头像</el-button>
                            </div>
                        </div>
                    </div>
                    <div class="personalMsg3">
                        <div class="personalMsgGenderSpan">
                            <span>性别</span>
                        </div>
                        <div class="personalMsgGenderR">
                            <el-radio v-model="personalMsgGender" label="1">男</el-radio>
                            <el-radio v-model="personalMsgGender" label="2">女</el-radio>
                            <el-radio v-model="personalMsgGender" label="3">保密</el-radio>
                        </div>
                    </div>
                    <div class="personalMsg4">
                        <div class="personalMsgIntroduceSpan">
                            <span>个人介绍</span>
                        </div>
                        <div class="personalMsgIntroduceR">
                            <el-input
                                    type="textarea"
                                    :rows="6"
                                    maxlength="80"
                                    show-word-limit
                                    placeholder="用一段话介绍你自己，会在你的个人页面示，最多输入80字..."
                                    v-model="personalMsgIntroduce">
                            </el-input>
                        </div>
                    </div>
                </div>
                <div class="personalMainBoxP2">
                    <div class="electiveCourse">
                        <div class="electiveCourseTitle">
                            <span>我的选课</span>
                        </div>
                        <div class="electiveCourseMain">

                            <div class="electiveCourseBox">
                                <div class="electiveCourse">
                                    <div class="electiveCourseImg">
                                        <img :src="electiveCourseImg" alt="">
                                    </div>
                                    <div class="electiveCourseTitle">
                                        <span>{{electiveCourseTitle}}</span>
                                    </div>
                                    <div class="electiveCourseText">
                                        <span class="electiveCourseTeacherTitle">主讲老师：{{electiveCourseTeacher}}</span>
                                        <span class="electiveCourseNum"><i class="el-icon-s-custom"></i> {{electiveCourseNum}} 学习</span>
                                    </div>
                                </div>
                                <div class="electiveCourseDel">
                                    <el-button @click="electiveCourseDel">删 除</el-button>
                                </div>
                            </div>

                            <div class="electiveCourseBox">
                                <div class="electiveCourse">
                                    <div class="electiveCourseImg">
                                        <img :src="electiveCourseImg" alt="">
                                    </div>
                                    <div class="electiveCourseTitle">
                                        <span>{{electiveCourseTitle}}</span>
                                    </div>
                                    <div class="electiveCourseText">
                                        <span class="electiveCourseTeacherTitle">主讲老师：{{electiveCourseTeacher}}</span>
                                        <span class="electiveCourseNum"><i class="el-icon-s-custom"></i> {{electiveCourseNum}} 学习</span>
                                    </div>
                                </div>
                                <div class="electiveCourseDel">
                                    <el-button @click="electiveCourseDel">删 除</el-button>
                                </div>
                            </div>

                            <div class="electiveCourseBox">
                                <div class="electiveCourse">
                                    <div class="electiveCourseImg">
                                        <img :src="electiveCourseImg" alt="">
                                    </div>
                                    <div class="electiveCourseTitle">
                                        <span>{{electiveCourseTitle}}</span>
                                    </div>
                                    <div class="electiveCourseText">
                                        <span class="electiveCourseTeacherTitle">主讲老师：{{electiveCourseTeacher}}</span>
                                        <span class="electiveCourseNum"><i class="el-icon-s-custom"></i> {{electiveCourseNum}} 学习</span>
                                    </div>
                                </div>
                                <div class="electiveCourseDel">
                                    <el-button @click="electiveCourseDel">删 除</el-button>
                                </div>
                            </div>

                            <div class="electiveCourseBox">
                                <div class="electiveCourse">
                                    <div class="electiveCourseImg">
                                        <img :src="electiveCourseImg" alt="">
                                    </div>
                                    <div class="electiveCourseTitle">
                                        <span>{{electiveCourseTitle}}</span>
                                    </div>
                                    <div class="electiveCourseText">
                                        <span class="electiveCourseTeacherTitle">主讲老师：{{electiveCourseTeacher}}</span>
                                        <span class="electiveCourseNum"><i class="el-icon-s-custom"></i> {{electiveCourseNum}} 学习</span>
                                    </div>
                                </div>
                                <div class="electiveCourseDel">
                                    <el-button @click="electiveCourseDel">删 除</el-button>
                                </div>
                            </div>

                            <div class="electiveCourseBox">
                                <div class="electiveCourse">
                                    <div class="electiveCourseImg">
                                        <img :src="electiveCourseImg" alt="">
                                    </div>
                                    <div class="electiveCourseTitle">
                                        <span>{{electiveCourseTitle}}</span>
                                    </div>
                                    <div class="electiveCourseText">
                                        <span class="electiveCourseTeacherTitle">主讲老师：{{electiveCourseTeacher}}</span>
                                        <span class="electiveCourseNum"><i class="el-icon-s-custom"></i> {{electiveCourseNum}} 学习</span>
                                    </div>
                                </div>
                                <div class="electiveCourseDel">
                                    <el-button @click="electiveCourseDel">删 除</el-button>
                                </div>
                            </div>

                            <div class="electiveCourseBox">
                                <div class="electiveCourse">
                                    <div class="electiveCourseImg">
                                        <img :src="electiveCourseImg" alt="">
                                    </div>
                                    <div class="electiveCourseTitle">
                                        <span>{{electiveCourseTitle}}</span>
                                    </div>
                                    <div class="electiveCourseText">
                                        <span class="electiveCourseTeacherTitle">主讲老师：{{electiveCourseTeacher}}</span>
                                        <span class="electiveCourseNum"><i class="el-icon-s-custom"></i> {{electiveCourseNum}} 学习</span>
                                    </div>
                                </div>
                                <div class="electiveCourseDel">
                                    <el-button @click="electiveCourseDel">删 除</el-button>
                                </div>
                            </div>

                            <div class="electiveCourseBox">
                                <div class="electiveCourse">
                                    <div class="electiveCourseImg">
                                        <img :src="electiveCourseImg" alt="">
                                    </div>
                                    <div class="electiveCourseTitle">
                                        <span>{{electiveCourseTitle}}</span>
                                    </div>
                                    <div class="electiveCourseText">
                                        <span class="electiveCourseTeacherTitle">主讲老师：{{electiveCourseTeacher}}</span>
                                        <span class="electiveCourseNum"><i class="el-icon-s-custom"></i> {{electiveCourseNum}} 学习</span>
                                    </div>
                                </div>
                                <div class="electiveCourseDel">
                                    <el-button @click="electiveCourseDel">删 除</el-button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="personalMainBoxP3">
                    <div class="saveButton">
                        <el-button @click="save">保 存</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Home',
        data() {
            return{
                personalMsgName:'',
                personalMsgImgSrc:require("../images/personalMsgImg.png"),
                personalMsgGender:"3",
                personalMsgIntroduce:"",
                electiveCourseImg:require("../images/electiveCourseImg.png"),
                electiveCourseTeacher:"蔡徐坤",
                electiveCourseNum:"100",
                electiveCourseTitle:"蔡徐坤的篮球第一章",
            }
        },
        methods: {
            imgEdit:function () {
                alert("没对接上");
            },
            electiveCourseDel:function () {
                alert("没对接上");
            },
            save:function () {
                alert("没对接上");
            },
        }
    }
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
    #personal{
        position: relative;
        background-color: rgba(247, 247, 247, 1);
        padding-top: 40px;
        padding-bottom: 100px;
        .personalMain{
            position: relative;
            width: 1120px;
            margin: 0 auto;
            .personalMainBox{
                position: relative;
                width: 100%;
                background-color: #fff;
                padding-top: 94px;
                .personalMainBoxP1{
                    margin-left: 54px;
                    .personalMsgTitle{
                        font-size: 24px;
                        color: #333333;
                        margin-bottom: 38px;
                    }
                    .personalMsg1{
                        margin-left: 68px;
                        .personalMsgName{
                            display: inline-block;
                            color: #6b6b6b;
                            font-size: 20px;
                            vertical-align: middle;
                        }
                        .personalMsgNameInput{
                            display: inline-block;
                            margin-left: 32px;
                            vertical-align: middle;
                            .el-input{
                                border:none;
                                .el-input__inner{
                                    width: 288px;
                                    height: 30px;
                                    font-size: 14px;
                                    outline: none;
                                    border-radius: 0;
                                    color: rgb(0,0,0);
                                    padding: 1px 8px;
                                }
                            }

                        }
                    }
                    .personalMsg2{
                        padding-top: 40px;
                        margin-left: 68px;
                        .personalMsgImgSpan{
                            position: relative;
                            top: -40px;
                            display: inline-block;
                            color: #6b6b6b;
                            font-size: 20px;
                        }
                        .personalMsgImg{
                            display: inline-block;
                            width: 150px;
                            height: 150px;
                            margin-left: 32px;
                            vertical-align: top;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .personalMsgImgR{
                            display: inline-block;
                            margin-left:32px;
                            .personalMsgImgSrcRText{
                                color: #a1a1a1;
                                font-size: 14px;
                            }
                            .personalMsgImgRButton{
                                margin-top: 18px;
                                button{
                                    width: 104px;
                                    height: 40px;
                                    background-color: #990000;
                                    outline: none;
                                    border: none;
                                    span{
                                        font-size: 14px;
                                        color: #fff;
                                    }
                                }
                                button:active{
                                    background-color: #d54a4e;
                                }
                            }
                        }
                    }
                    .personalMsg3 {
                        padding-top: 40px;
                        margin-left: 68px;
                        line-height: 22px;
                        .personalMsgGenderSpan {
                            top: -40px;
                            display: inline-block;
                            color: #6b6b6b;
                            font-size: 20px;
                            vertical-align: middle;
                        }
                        .personalMsgGenderR{
                            display: inline-block;
                            margin-left: 32px;

                            .el-radio__inner{
                                width: 20px;
                                height: 20px;
                            }
                            .el-radio__label{
                                font-size: 16px;

                            }
                        }
                    }
                    .personalMsg4 {
                        padding-top: 40px;
                        margin-left: 28px;
                        .personalMsgIntroduceSpan{
                            top: -40px;
                            display: inline-block;
                            color: #6b6b6b;
                            font-size: 20px;
                            vertical-align: top;
                        }
                        .personalMsgIntroduceR{
                            width: 504px;
                            height: 150px;
                            display: inline-block;
                            margin-left: 32px;
                            .el-input{
                            }
                            .el-textarea__inner{
                                color: rgb(0,0,0);
                                max-height: 150px;
                            }
                        }
                    }
                }
                .personalMainBoxP2{
                    margin-top: 36px;
                    margin-left: 54px;
                    .electiveCourse{
                        .electiveCourseTitle{
                            font-size: 24px;
                            color: #333333;
                        }
                        .electiveCourseMain{
                            width: 1000px;
                            position: relative;
                            .electiveCourseBox{
                                position: relative;
                                display: inline-block;
                                margin-top: 42px;
                                margin-left: 100px;
                                height: 258px;
                                .electiveCourse{
                                    position: relative;
                                    width: 254px;
                                    height: 211px;
                                    border: 1px solid rgba(215, 215, 215, 1);
                                    border-radius: 10px;
                                    .electiveCourseImg{
                                        position: relative;
                                        width: 256px;
                                        height: 145px;
                                        img{
                                            position: relative;
                                            width: 100%;
                                            height: 100%;
                                            left: -1px;
                                            top: -1px;
                                        }
                                    }
                                    .electiveCourseTitle{
                                        color: #6b6b6b;
                                        font-size: 20px;
                                        margin-top: 10px;
                                        margin-left: 14px;
                                    }
                                    .electiveCourseText{
                                        position: absolute;
                                        width: 100%;
                                        bottom: 6px;
                                        font-size: 14px;
                                        .electiveCourseTeacherTitle{
                                            margin-left: 14px;
                                            color: #BCBCBC;
                                            font-size: 14px;
                                        }
                                        .electiveCourseNum{
                                            position: absolute;
                                            right: 26px;
                                            color: #C72E30;
                                            i{
                                                color: #BCBCBC;
                                            }
                                        }
                                    }
                                }
                                .electiveCourseDel{
                                    width: 100%;
                                    margin-top: 12px;
                                    text-align: right;
                                    button{
                                        display: inline-block;
                                        width: 90px;
                                        height: 33px;
                                        background-color: #990000;
                                        outline: none;
                                        border: none;
                                        padding: 0;
                                        span{
                                            font-size: 13px;
                                            color: #fff;
                                        }
                                    }
                                    button:active{
                                        background-color: #d54a4e;
                                    }
                                }
                            }
                            .electiveCourseBox:nth-child(3n-2){
                                margin-left: 0;
                            }
                        }
                    }
                }
                .personalMainBoxP3{
                    margin-top: 140px;
                    padding-bottom: 46px;
                    .saveButton{
                        display: inline-block;
                        margin-left:880px;
                        button{
                            width: 142px;
                            height: 52px;
                            background-color: #990000;
                            outline: none;
                            border: none;
                            span{
                                font-size: 18px;
                                color: #fff;
                            }
                        }
                        button:active{
                            background-color: #d54a4e;
                        }
                    }
                }
            }
        }
    }

</style>

