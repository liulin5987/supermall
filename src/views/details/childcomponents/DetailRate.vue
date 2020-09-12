<template>
  <div id="rate"> 
    <div>
      <span>用户评价</span>
      <span class="right">更多>></span>
    </div>
    <div class="rate" v-if="rate[0]">
      <div class="user">
        <img :src="rate[0].user.avatar" alt="">
        <span>{{rate[0].user.uname}}</span>
      </div>
      <div class="content">{{rate[0].content}}</div>
      <div class="ratedate">
        <span>{{rate[0].created | showdate}}</span>
        <span>{{rate[0].style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/tools.js"
  export default {
    name:"DetailRate",
    props:{
      rate:{
        type:Array,
        default(){
          return []
        }
      },
      crate:{
        type:Number,
        default:0
      }
    },
    filters:{
      showdate(value){
        var date = new Date(value*1000)
        return formatDate(date,"yyyy-MM-dd")
      }
    }
  }
</script>

<style scoped>
  #rate {
    margin-top: 15px;
    padding: 5px;
  }
  #rate .user {
    border-bottom: 1px solid #eee;
    padding: 10px 0;
  }
  #rate .user img{
    height: 40px;
    width: 40px;
    border-radius: 20px;
    vertical-align: middle;
    margin-right: 10px;
  }
  #rate .user span {
    font-size: 14px;
    font-weight: 600;
  }
  #rate .content {
    padding: 10px 0;
    font-size: 14px;
  }
  #rate .ratedate {
    font-size: 14px;
    color: var(--color-text);
  }
  #rate .ratedate span {
    margin-right: 4px;
  }
</style>