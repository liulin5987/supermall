<template>
  <div id="items">
    <div class="subitem" v-for="(sitem,sindex) in subdata" :key="sindex">
      <div class="img">
        <a :href="sitem.link">
          <img :src="sitem.image" alt="" @load="imgload">
        </a>
      </div>
      <div class="itemtitle">
        {{sitem.title}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"CategorySubItem",
    props:{
      subdata:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      imgload(){
        this.$emit('imgload')
      }
    }
  }
</script>

<style scoped>
  #items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .subitem {
    width: 30%;
   
    margin-bottom: 15px;
    
  }
  .subitem img{
    width: 70px;
    height: 70px;
  }
  .itemtitle {
    text-align: center;
    font-size: 14px;
  }
</style>