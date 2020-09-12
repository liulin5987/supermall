<template>
  <div id="detailtitle">
    <div class="title">{{goodsdata.title}}</div>
    <div class="pricebar">
      <span class="price">{{goodsdata.price}}</span>
      <span class="oldPrice">{{goodsdata.oldPrice}}</span>
      <span class="discountDesc" v-if="goodsdata.discountDesc">{{goodsdata.discountDesc}}</span>
    </div>
    <div class="columns" v-if="goodsdata.columns">
      <span class="left">{{goodsdata.columns[0]}}</span>
      <span class="center">{{goodsdata.columns[1]}}</span>
      <span class="right">{{goodsdata.services}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailItemTitle',
    props:{
      goodsdata:{
        type:Object,
        default:{}
      }
    }
  }
</script>

<style scoped>
  #detailtitle {
    padding-bottom: 25px;
    box-shadow: 0 1px 3px rgba(153,153,153,.2);
  }
  #detailtitle .title{
    font-size: 18px;
    font-weight: 500;
    color: var(--color-text);
    padding: 10px 5px;
    text-indent: 1em;
  }
  #detailtitle .price {
    color: var(--color-tint);
    font-size: 25px;
    padding: 0 5px;
  }
  #detailtitle .oldPrice {
    color: #999;
    text-decoration: line-through;
  }
  .discountDesc {
    padding: 3px;
    color: #fff;
    background-color: var(--color-tint);
    border-radius: 10px;
    margin-left: 10px;
    font-size: 12px;
    position: relative;
    bottom: 10px;
    font-weight: 600;
  }
  .columns {
    margin: 15px 5px 0;
    text-align: center;
    font-size: 14px;
    color: #999;
    padding-bottom: 8px;
    box-shadow: 0 1px 1px rgba(153,153,153,.2);
  }
 
 
  
</style>