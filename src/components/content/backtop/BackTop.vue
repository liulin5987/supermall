<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name:'BackTop'
  }
</script>

<style scoped>
  .backtop{
    position: fixed;
    bottom: 50px;
    right: 10px;
    /* z-index: 29; */
  }
  .backtop img{
    width: 43px;
  }
</style>