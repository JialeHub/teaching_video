<template>
    <div id="home">
        <div class="block">
            <el-carousel trigger="click" height="150px">
                <el-carousel-item v-for="item in imgList" :key="item">
                    <img alt="" ref="imgHeight" :src="item.idView" class="banner_img"/>
                </el-carousel-item>
            </el-carousel>
            <div class="homeMain">
                <div class="homeText1">
                    <h3>课程简介</h3>
                    <p>{{homeText1Content}}</p>
                </div>
                <div class="homeText2">
                    <h3>课程负责人</h3>
                    <div class="homeText2Img">
                        <img :src="homeText2ImgSrc" alt="">
                    </div>
                    <div class="homeText2ContentBox">
                        <p>{{homeText2Content}}</p>
                    </div>
                </div>
                <div class="homeText3">
                    <h3>课程回顾</h3>
                    <div class="classReviewBox">
                        <div class="classReviewBox1" @click="classReviewBox1">
                            <div class="classReviewImg">
                                <img :src="classReviewImgList1" alt="">
                            </div>
                            <div class="classReviewTitle">教学课件</div>
                            <div class="classReviewContent">
                                {{classReviewContent1}}
                            </div>
                        </div>
                        <div class="classReviewBox2" @click="classReviewBox2">
                            <div class="classReviewImg">
                                <img :src="classReviewImgList2" alt="">
                            </div>
                            <div class="classReviewTitle">教学录像</div>
                            <div class="classReviewContent">
                                {{classReviewContent2}}
                            </div>
                        </div>
                        <div class="classReviewBox3" @click="classReviewBox3">
                            <div class="classReviewImg">
                                <img :src="classReviewImgList3" alt="">
                            </div>
                            <div class="classReviewTitle">自测题</div>
                            <div class="classReviewContent">
                                {{classReviewContent3}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="homeTextEnd"></div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Home',
        data() {
            return{
                imgList:[
                    {id:0,idView:require("../images/b1.jpg")},
                    {id:1,idView:require("../images/b2.jpg")},
                    {id:2,idView:require("../images/b3.jpg")},
                    {id:3,idView:require("../images/b4.jpg")},
                ],
                homeText1Content:"百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！百因必有果你的报应就是我,点个双击摸摸哒！",
                homeText2Content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                homeText2ImgSrc:require("../images/homeText2.jpg"),
                classReviewImgList1:require("../images/classView.png"),
                classReviewImgList2:require("../images/classView.png"),
                classReviewImgList3:require("../images/classView.png"),
                classReviewContent1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, ",
                classReviewContent2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, ",
                classReviewContent3:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, ",
            }
        },
        methods: {
            classReviewBox1:()=>{window.open('./');},
            classReviewBox2:()=>{window.open('./');},
            classReviewBox3:()=>{window.open('./');},
        }
    }
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
    #home{
        position: relative;
        background-color: rgba(247, 247, 247, 1);
        .el-carousel__container{
            height:442px!important;
        }
        .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 150px;
            margin: 0;
        };
        .banner_img{
            height: 100%;
            width: 100%;
        }
        .el-carousel__arrow{
            width: 79px;
            height: 103px;
            border-radius: 0;
            background-color: rgba(215, 215, 215, 0.45)
        }
        .el-carousel__arrow:hover{
            background-color: rgba(215, 215, 215, 0.66)
        }
        .el-carousel__arrow i::before{
            font-size: 30px;
        }
        .homeMain{
            margin: 0 auto;
            width: 1060px;
            .homeText1{
                h3{
                    font-weight: 400;
                    font-style: normal;
                    font-size: 28px;
                    margin-top: 70px;
                }
                p{
                    font-size: 20px;
                    margin-top: 24px;
                    text-align: justify;
                    text-indent: 2rem;
                }
            }
            .homeText2{
                position: relative;
                min-height: 225px;
                h3{
                    font-weight: 400;
                    font-style: normal;
                    font-size: 28px;
                    margin-top: 70px;
                }
                .homeText2Img{
                    display: inline-block;
                    width: 146px;
                    height: 205px;
                    margin-top: 24px;
                    float: left;
                }
                .homeText2Img>img{
                    width: 100%;
                    height: 100%;
                }
                .homeText2ContentBox{
                    position: relative;
                    display: inline-block;
                    margin-top: 24px;
                    width: 880px;
                    left: 34px;
                }
                .homeText2ContentBox p{
                    font-size: 20px;
                    text-align: justify;
                    text-indent: 2rem;
                }
            }
            .homeText3{
                position: relative;
                margin-top: 70px;
                h3{
                    font-weight: 400;
                    font-style: normal;
                    font-size: 28px;
                    margin-top: 70px;
                }
                .classReviewBox{
                    position: relative;
                    height: 366px;
                    margin-top: 42px;
                    padding-bottom: 82px;
                    .classReviewBox1,.classReviewBox2,.classReviewBox3{
                        width: 300px;
                        height: 366px;
                        background-color: #fff;
                        cursor: pointer;
                        .classReviewTitle{
                            margin: 0 27.5px 6px 27.5px;
                            color: #333333;
                            font-size: 18px;
                        }
                        .classReviewImg{
                            width: 245px;
                            height: 170px;
                            background-color: #3a8ee6;
                            margin: 18px auto 12px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .classReviewContent{
                            font-size: 13px;
                            margin: 0 27.5px;
                        }
                    }
                    .classReviewBox1{
                        position: absolute;
                        left: 0;
                    }
                    .classReviewBox2{
                        position: absolute;
                        left: 380px;
                    }
                    .classReviewBox3{
                        position: absolute;
                        right: 0;
                    }

                }

            }
        }

    }


</style>
