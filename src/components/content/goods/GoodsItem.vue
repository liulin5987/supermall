<template>
  <div class="goodsitem" v-if="goodsitem">
    <img :src="showmsg" alt="" @load="imgload" @click="details">
    <div class="goodsitemtitle">{{goodsitem.title}}</div>
    <div class="info">
      <span class="goodsitemprice">{{goodsitem.price}}</span>
      <img src="~assets/star.svg" alt="">
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"GoodsItem",
    props:{
      goodsitem:{
        type: Object,
        data(){
          return {}
        }
      }
    },
    computed:{
      showmsg(){
        return this.goodsitem.image || this.goodsitem.show.img
      }
    },
    methods:{
      imgload(){
        this.$bus.$emit('imgload')
      },
      details(){
        this.$router.push('/details/' + this.goodsitem.iid)
      }
    }
  }
</script>

<style scoped>
  .goodsitem{
    width: 45%;
    font-size: 12px;
  }
  .goodsitem img{
    border-radius: 5px;
    width: 100%;
    height: 216px;
  }
  .goodsitemtitle{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 2px 5px;
  }
  .info{
    text-align: center;
  }
  .info img{
    display: inline-block;
    width: 12px;
    height: 12px;
  }
  .info .goodsitemprice{
    color: var(--color-high-text);
  }
</style>