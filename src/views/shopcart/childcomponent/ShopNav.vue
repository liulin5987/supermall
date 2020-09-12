<template>
 <nav-bar class="shopnav">
   <div>
     购物车({{cartlength}})
   </div>
 </nav-bar>
 
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "ShopNav",
  computed:{
    cartlength(){
      return this.$store.getters.cartlength
    }
  },
  components:{
    NavBar
  }
};
</script>

<style scoped>
.shopnav {
  background-color: var(--color-tint);
  color: #fff;
}

</style>
