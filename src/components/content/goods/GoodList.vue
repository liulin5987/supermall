<template>
  <div class="goodlist">
    <goods-item class="goodsitem" v-for="(item, index) in goods" :key="index" :goodsitem="item"/>
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem'
  export default {
    name:'GoodList',
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{ 
      GoodsItem
    },
    methods:{
      imgLoad(){
      this.$emit('imgload')  
      console.log('imgload1')
    },
    }
  }
</script>

<style scoped>
  .goodlist{
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
</style>