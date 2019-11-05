<template>
    <div id="myCourse">
        <div class="myCourseMain">
            <div class="myCourseTop">
                <div class="myCourseTopL">
                    <div class="myCourseTopLImg">
                        <img :src="myCourseImg" alt="">
                    </div>
                </div>
                <div class="myCourseTopR">
                    <div class="myCourseTopRMsg">
                        <div class="myCourseName">
                            <span>{{myCourseName}}</span>
                        </div>
                        <div class="myCourseTopRMsgContent">
                            <div class="myCourseLearnersNum">
                                <span>{{myCourseLearnersNum}} 人学过</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="myCourseProgress">

            </div>
            <div class="myCourseBottom">
                <div class="myCourseBottomL"></div>
                <div class="myCourseBottomR"></div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Home',
        data() {
            return{
                myCourseImg:require("../images/myCourseImg.png"),
                myCourseName:"坤坤的唱跳 零基础入门",
                myCourseLearnersNum:"100",
            }
        },
        methods: {

        }
    }
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
    #myCourse{
        position: relative;
        background-color: rgba(247, 247, 247, 1);
        padding-top: 58px;
        padding-bottom: 100px;
        .myCourseMain{
            width: 1171px;
            height: 100%;
            margin: 0 auto;
            .myCourseTop{
                position: relative;
                width: 100%;
                height: 287px;
                background: #fff;
                .myCourseTopL{
                    display: inline-block;
                    position: absolute;
                    left: 0;
                    .myCourseTopLImg{
                        margin: 40px 48px 0 38px;
                        width: 350px;
                        height: 208px;
                        .img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .myCourseTopR{
                    display: inline-block;
                    position: absolute;
                    height: 208px;
                    margin-top: 40px;
                    width: 735px;
                    right: 0;
                    .myCourseName{
                        font-size: 32px;
                        color: #333;
                    }
                    .myCourseTopRMsgContent{
                        margin-top: 18px;
                        .myCourseLearnersNum{
                            font-size: 16px;
                            color: #A1A1A1;
                        }
                    }
                }
            }
            .myCourseProgress{
                width: 100%;
                height: 113px;
                background-color: #fff;
                margin: 20px 0;
            }
            .myCourseBottom{
                .myCourseBottomL{
                    display: inline-block;
                    width: 834px;
                    height: 1000px;
                    vertical-align: top;
                    background-color: #fff;
                }
                .myCourseBottomR{
                    display: inline-block;
                    width: 307px;
                    height: 809px;
                    background-color: #fff;
                    margin-left: 30px;
                }
            }
        }
    }

</style>
