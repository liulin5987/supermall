<template>
  <div id="shopinfo">
    <div class="shophead">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shopbody">
      <div class="shopleft">
        <div class="leftitem" >
          <div>{{shopInfo.sells | sellfilter}}</div>
          <div class="text">总销量</div>
        </div>
        <div class="leftitem">
          <div>{{shopInfo.goods}}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="shopright" v-if="shopInfo.score">
        <div>
          <span>{{shopInfo.score[0].name}}</span>
          <span :class="{scoretxt:shopInfo.score[0].isBetter}">{{shopInfo.score[0].score}}</span>
          <span :class="{scorebc:shopInfo.score[0].isBetter}">{{shopInfo.score[0].isBetter? '高': '低'}}</span>
        </div>
        <div>
          <span>{{shopInfo.score[1].name}}</span>
          <span :class="{scoretxt:shopInfo.score[1].isBetter}">{{shopInfo.score[1].score}}</span>
          <span :class="{scorebc:shopInfo.score[1].isBetter}">{{shopInfo.score[1].isBetter? '高': '低'}}</span>
        </div>
        <div>
          <span>{{shopInfo.score[2].name}}</span>
          <span :class="{scoretxt:shopInfo.score[2].isBetter}">{{shopInfo.score[2].score}}</span>
          <span :class="{scorebc:shopInfo.score[2].isBetter}">{{shopInfo.score[2].isBetter? '高': '低'}}</span>
        </div>
      </div>
    </div>
    <div class="shopadr">
      <a :href="shopInfo.shopUrl">
        进店逛逛
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailShopInfo",
    props:{
      shopInfo:{
        type:Object,
        default:{}
      }
    },
    filters:{
      sellfilter:function (value) {
        if(value<10000) return value;
        return (value/10000).toFixed(1) + "万"
        
      }
    }
  }
</script>

<style scoped>
  #shopinfo {
    background-color: #fff;
    padding: 5px;
    border: 1px solid rgba(153,153,153,.4);
  }
  .shophead {
    padding: 15px 0px;
    font-size: 14px;
    font-weight: 600;
  }
  .shophead img{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid rgba(153,153,153,.4);
    vertical-align: middle;
    margin-right: 8px;
  }
  .shopbody {
    overflow: hidden;
    padding: 10px ;
    border-bottom: 1px solid #eee;
  }
  .shopleft {
    float: left;
    width: 54%;
    display: flex;
  }
  .leftitem {
    flex:1;
    text-align: center;
    padding: 0 10px;
  }
  .leftitem div {
    margin-bottom: 8px;
  }
  .leftitem:nth-child(2){
    border-right: 1px solid rgba(100, 100, 100, .2);
  }
  .leftitem .text{
    font-size: 12px;
    font-weight: 600;
  }
  .shopright{
    width: 45%;
    float: left;
    padding: 0 5px 0 15px;
    font-size: 12px;
    font-weight: 600;
  }
  .shopright div{
    margin-bottom: 3px;
  }
  .shopright span {
    margin-right: 5px;
  }
  .shopright span:nth-child(2){
    color: forestgreen;
  }
  .shopright span:nth-child(3) {
    float: right;
    background-color: forestgreen;
    color: #fff;
    font-weight: normal;
  }
  #shopinfo .scoretxt{
    color: red;
  }
  #shopinfo .scorebc {
    background-color: red;
  }
  .shopadr {
    margin:15px 0;
    text-align: center;
  }
  .shopadr a{
    font-size: 14px;
    padding: 10px 45px;
    color: var(--color-text);
    background-color: #eee;
    border-radius: 15px;
  }
</style>