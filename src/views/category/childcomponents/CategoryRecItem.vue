<template>
  <div class="recitems">
    <div class="recitem" v-for="(item, index) in recommenditemdata" :key="index">
      <a :href="item.link">
        <img :src="item.img" alt="" @load="recload">
      </a>
      <div class="itemtitle">{{item.title}}</div>
      <div class="info">
        <span class="itemprice">{{item.price}}</span>
        <img src="~assets/star.svg" alt="">
        <span class="collect">{{item.cfav}}</span>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"CategoryRecItem",
    props:{
      recommenditemdata:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      recload(){
        this.$emit('recload')
      }
    }
  }
</script>

<style scoped>
  .recitems {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .recitem {
    width: 45%;
    
  }
  .recitem img {
    width: 100%;
  }
  .itemtitle {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
  }
  .info {
    text-align: center;
    font-size: 12px;
  }
  .info img {
    display: inline-block;
    height: 12px;
    width: 12px;
  }
</style>