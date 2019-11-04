<template>
  <div id="app" >

    <el-container>
      <!--头部-->
      <el-header><v-head></v-head></el-header>
      <!--中部-->

        <el-main>
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>

      <!--尾部-->
      <el-footer><v-footer></v-footer></el-footer>
    </el-container>

  </div>
</template>

<script>
  /*import HelloWorld from './components/HelloWorld.vue'*/
  import Head from './components/head.vue';
  import Footer from './components/footer.vue';

  export default {
    name: 'app',
    components: {
        'v-head':Head,
        'v-footer':Footer,
    },
    data() {
      return {

      }
    },
    methods:{
      a1:()=>{this.console.log(1)}
    }

  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration:none;
}
.el-header,.el-main,.el-footer{
  padding: 0!important;
}
  .el-footer{
    height: 186px!important;
      min-width: 1128px;
  }
.el-main{
    min-width: 1128px;
    overflow: hidden;
}
.v-enter,.v-leave-to{
  opacity: 0;
  transform: translateY(-10px);
}
.v-enter-active,.v-leave-active{
  transition: all 0.2s ease;
}
</style>
