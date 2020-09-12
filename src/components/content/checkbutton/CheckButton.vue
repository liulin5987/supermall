<template>
  <div class="checks" :class="{checked:ischeck}" >
    <img  src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "Checkbutton",
  props: {
    ischeck:{
      type:Boolean,
      default:false
    }
  }
};
</script>

<style scoped>
.checks {
  position: relative;
  width: 20px;
}
img {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #eee;
  border: 1px solid #ccc;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
.checked img{
  background-color: red;
}
</style>
