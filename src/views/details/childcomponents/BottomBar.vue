<template>
  <div id="bottombar">
    <div class="icon">
      <div class="iconitem">
        <div class="server"></div>
        <div>客服</div>
      </div>
      <div class="iconitem">
        <div class="shop"></div>
        <div>店铺</div>
      </div>
      <div class="iconitem">
        <div class="markin" v-if="ismark"></div>
        <div class="mark" v-if="!ismark"></div>
        <div>收藏</div>
      </div>
    </div>
    <div class="addcar" @click="addcart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
  export default {
    name:"BottomBar",
    data(){
      return {
        ismark:false
      }
    },
    methods:{
      addcart(){

        this.$emit('addcart')
      }
    }
  }
</script>

<style scoped>
  #bottombar{
    position: fixed;
    height: 49px;
    width: 100%;
    background-color:  #fff;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2px;
  }
  #bottombar .icon{
    float: left;
    width: 50%;
    display: flex;    
  }
  .server,.shop,.mark,.markin {
    height: 30px;
    background: url("~assets/img/detail/detail_bottom.png") no-repeat;
    background-size: 50%;
  }
  .server {
    background-position: center -60px;
  }
  .shop {
    background-position: center -115px;
  }
  .mark {
    background-position: center 2px;
  }
  .markin {
     background-position: center -30px;
  }
  .iconitem {
    flex: 1;
    font-size: 14px;
    text-align: center;
  }
  .addcar {
    display: inline-block;
    width: 30%;
    height: 49px;
    background-color: orange;
    text-align: center;
    line-height: 49px;
    color: #333;
    
  }
  .buy {
    display: inline-block;
    width: 20%;
    height: 49px;
    background-color: var(--color-tint);
    text-align: center;
    line-height: 49px;
    color: #eee;
    
  }
</style>