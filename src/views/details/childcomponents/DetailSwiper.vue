<template>
  <swiper class="detailswiper">
    <swiper-item v-for="(item,index) in swiperimg" :key="index">
      <img :src="item" alt="">
    </swiper-item>  
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper/index.js"
  export default {
    name:'DetailSwiper',
    props:{
      swiperimg:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .detailswiper {
    height: 300px;
    overflow: hidden;
  }
</style>