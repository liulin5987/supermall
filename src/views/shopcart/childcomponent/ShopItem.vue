<template>
  <div class="shopitem">
    <check-button :ischeck="shopitem.checked" @click.native="checkchange"/>
    <div class="shopimg">
      <img :src="shopitem.img" alt="">
    </div>
    <div class="info">
      <div class="title">{{shopitem.title}}</div>
      <div class="desc">{{shopitem.desc}}</div>
      <div class="goodsdata">
        <span class="price">￥{{shopitem.price}}</span>
        <span class="count">X{{shopitem.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkbutton/CheckButton.vue"
  export default {
    name:"ShopItem",
    data(){
      return {
       checked:true
      }
    },
    props:{
      shopitem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      checkchange(){
       this.shopitem.checked = !this.shopitem.checked
       this.checked = this.shopitem.checked
      }
    },
    components:{
      CheckButton
    },
    computed:{

    },
    filters:{
      
    }
  }
</script>

<style scoped>
  .shopitem {
    display: flex;
    padding: 8px;
    height: 120px;
   
  }
  .shopimg{
    width: 30%;
  }
  
  .shopimg img{
    width: 70px;
    height: 100px;
    border-radius: 5px;
  }
  .shopitem .info {
    width: 65%;
    position: relative;
  }
  .shopitem .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .shopitem .desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
  }
  .shopitem .price {
    color: pink;

  }
  .goodsdata {
    width: 100%;
    position: absolute;
    bottom: 8px;
  }
  .info .count {
    float: right;
  }
  .checked img {
    background-color: red;
  }
</style>