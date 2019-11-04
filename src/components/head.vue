<template>
    <div id="head">
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-t1"
                mode="horizontal"
                background-color="#434343"
                text-color="#fff"
                active-text-color="rgb(199, 46, 48)">
            <h1><a :href="logo_link"><img src="../images/logo_u57.png" alt="" id="logo"></a></h1>
            <el-menu-item index="1">
                <router-link to="/home" class="menu_right_a">首页</router-link>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">课程评价</template>
                <el-menu-item index="2-1">校外专家评价</el-menu-item>
                <el-menu-item index="2-2">校内专家评价</el-menu-item>
                <el-menu-item index="2-3">教师评价</el-menu-item>
                <el-menu-item index="2-4">学生评价</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">考试平台</template>
                <el-menu-item index="3-1">客观题</el-menu-item>
                <el-menu-item index="3-2">主观题</el-menu-item>
                <el-menu-item index="3-3">模拟考场</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">师生互动</el-menu-item>
            <el-menu-item index="5">作业提交</el-menu-item>
            <el-submenu index="6">
                <template slot="title">教学资源</template>
                <el-menu-item index="6-1">教学录像</el-menu-item>
                <el-menu-item index="6-2">自测题</el-menu-item>
                <el-menu-item index="6-3">教学大纲</el-menu-item>
            </el-submenu>
            <el-menu-item index="0" id="menu_right_outer">
                <div id="menu_right">
                        <span><a href="" class="menu_right_a">我的学习</a></span>
                        <span id="menu_right_line"> | </span>
                        <span id="menu_right_userName">
                            <router-link to="/login" class="menu_right_a">{{userName}}</router-link>
                        </span>
                        <router-link to="/personal">
                            <el-avatar :size="40" :src="circleUrl" id="head_avatar"></el-avatar>
                        </router-link>
                </div>
            </el-menu-item>
        </el-menu>
    </div>

</template>

<script>
    export default {
        name: 'Head',
        data() {
            return{
                activeIndex: '1',
                activeIndex2: '1',
                logo_link:'http://www.baidu.com',
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
                sizeList: ["large", "medium", "small"],
                userName:'登录',
            }
        },
    }
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss" >
    #head{
        background-color:#434343;
        -moz-user-select:none; /*火狐*/
        -webkit-user-select:none; /*webkit浏览器*/
        -ms-user-select:none; /*IE10*/
        user-select:none;
        #menu_right_outer{
            float: right;
            border-bottom:0!important;
        }
        #menu_right_outer:hover{
            background-color: rgba(67, 67, 67,1) !important;
        }
        #menu_right{
            display: inline;
            float: right;
            color:#fff;
            font-size: 14px;
            height: 50px;
            vertical-align:middle;
            //padding-top: 10px;
            .menu_right_a{

                color:#fff;
                font-size: 14px;
                vertical-align:middle;
            }
            .menu_right_a:hover{
                 color:rgb(199, 46, 48);
            }
            #menu_right_line{
                margin: 0 8px 0 8px;
                vertical-align:middle;
            }
            #menu_right_userName{
                vertical-align:middle;
                margin-right: 14px;
            }
            #head_avatar{
                vertical-align:middle;
            }
        }
        .el-menu.el-menu--horizontal{
            border-bottom:0;
        }
        .el-menu-t1{
            max-width: 1450px;
            min-width: 1128px;
            margin: 0 auto;
        }
        #logo{
            text-align: center;
            float: left;
            max-width: 120px;
            max-height: 60px;
            margin-right: 10px;
        }

    }

</style>
