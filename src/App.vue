<template>
  <div id="app">
    <tab-bar></tab-bar>
    <div><img src="assets/logo.png" alt=""></div>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'


export default {
  name: 'App',
  components:{
    TabBar
  }
}
</script>
<style>
  @import './assets/css/base.css';
  img{
    width: 500px !important; 
    height: 500px !important;
  }
</style>
