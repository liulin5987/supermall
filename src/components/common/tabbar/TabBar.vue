<template>
    <div id="tab-bar">
      <div class="tab-bar-item">
          <img src="assets/logo.png" alt="">
          <div>
              首页
          </div>
      </div>
      <div class="tab-bar-item">
          <img src="assets/img/tabbar/home.svg" alt="">
          <div>
              首页
          </div>
      </div>
      <div class="tab-bar-item">
          <img src="assets/img/tabbar/home.svg" alt="">
          <div>
              首页
          </div>
      </div>
      <div class="tab-bar-item">
          <img src="assets/img/tabbar/home.svg" alt="">
          <div>
              首页
          </div>
      </div>
    </div>
</template>

<script>
    
    export default {
        name:'TabBar'
    }
</script>

<style scoped>
    #tab-bar{
        height: 49px;
        background-color: #f6f6f6;
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 1px 1px rgba(50, 50, 50, 0.05);
    }
    .tab-bar-item{
        flex: 1;
    }
   
</style>