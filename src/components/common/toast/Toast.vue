<template>
  <div class="toast" v-show="isshow">
    <div>
      {{message}}
    </div>
  </div>
</template>

<script>
  export default {
    name:"Toast",
    data(){
      return {
        message:"",
        isshow: false
      }
    },
    methods:{
      show(msg,delay=2000){
        this.message = msg
        this.isshow = true
        setTimeout(() => {
          this.isshow = false
        },delay)
      }
    }
  }
</script>

<style scoped>
  .toast {
  background-color: rgba(0,0,0,.7);
  padding: 5px 8px;
  border-radius: 8px;
  position: fixed;
  top: 40vh;
  left: 30%;
  color: #fff;
}
</style>