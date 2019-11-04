<template>
    <div id="footer">
        <div class="footer_box">
            <div class="footer_top">
                <el-link :underline="false" href="https://element.eleme.io" target="_blank">关于我们</el-link>
                <el-link :underline="false" href="https://element.eleme.io" target="_blank">加入我们</el-link>
                <el-link :underline="false" href="https://element.eleme.io" target="_blank">联系我们</el-link>
                <el-link :underline="false" href="https://element.eleme.io" target="_blank">企业合作</el-link>
                <el-link :underline="false" href="https://element.eleme.io" target="_blank">讲师合作</el-link>
                <el-link :underline="false" href="https://element.eleme.io" target="_blank">帮助中心</el-link>
                <el-link :underline="false" href="https://element.eleme.io" target="_blank">黑板报</el-link>
                <el-link :underline="false" href="https://element.eleme.io" target="_blank">友情链接</el-link>
            </div>
            <div class="footer_bottom">
                <p>Copyright ©2013-2018 jikexueyuan.com All Rights Reserved. 京ICP备10018032号 京公网安备11010802013056</p>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return{

            }
        },
    }
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss" >
    #footer{
        position: absolute;
        width: 100%;
        height: 186px;
        background-color: rgba(255, 255, 255, 1);
        .footer_box{
            margin: 45px auto;
            width: 1128px;
            height: 96px;
        }
        .footer_top{
            width: 100%;
            height: 48px;
            border-bottom: rgba(200,200,200,1) solid 1px;
            text-align: center;
            padding-top: 17px;
            box-sizing: border-box;
            .el-link{
                padding: 0 12px 0 12px;
                border-right:rgba(200,200,200,0.8) solid 1px;
                font-size: 14px;
                color: rgba(120,120,120,1);
            }
            .el-link:hover{
                color: rgba(80,80,80,1);
            }
            .el-link:last-child{
                border-right: 0;
            }
        }
        .footer_bottom{
            font-size: 14px;
            color: rgba(150,150,150,1);
            text-align: center;
            padding-top: 10px;
        }
    }

</style>
