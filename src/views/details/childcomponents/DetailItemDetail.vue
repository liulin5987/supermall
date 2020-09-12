<template>
  <div>
    <div class="detailtxt">
      <div class="headline"></div>
      <span v-for="(item,index) in detailtitle" :key="index">【{{item}}】</span>
      <div class="endline"></div>
    </div>
    <div class="detailimgs">
      <div class="detailimg" v-for="(img,index) in detailimgs" :key="index">
        <img :src="img" alt="" @load="dimgload">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailItemDetail",
    props:{
      detailtitle:{
        type:Array,
        default:[]
      },
      detailimgs:{
        type:Array,
        default:[]
      }
    },
    methods:{
      dimgload(){
        this.$emit('dimgload')
      }
    }
  }
</script>

<style scoped>
  .headline,.endline{
    width: 30%;
    height: 0;
    border-bottom: .3px solid black;
  }
  .headline::before,.endline::after {
    content: '';
    width: 5px;
    height: 5px;
    display: block;
    border: 1px solid black;
  }
  .headline::before {
    position: absolute;
    top: -4px;
    left: 0;
  }
  .endline::after {
    position: absolute;
    bottom: -5px;
    right: 0;
  }
  .endline {
   position: absolute;
   bottom: 0;
   right: 0;
  }
  .detailtxt {
    position: relative;
    margin: 5px 0;
  }
  .detailimg {
    padding: 5px;
  }
  .detailimg img {
    width: 100%;
  }
</style>