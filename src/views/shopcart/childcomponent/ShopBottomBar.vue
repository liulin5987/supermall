<template>
  <div class="bottombar">
    <check-button class="check" @click.native="btnclick" :ischeck="ischeck"/>
    <span>全选</span>
    <div class="total">合计：{{ totalprice }}</div>
    <div class="buy">去结算（{{ sum }}）</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton.vue";
export default {
  name: "ShopBottomBar",
  components: {
    CheckButton,
  },
  data() {
    return {
     
    };
  },
  computed: {
    sum() {
      return this.$store.getters.sum;
    },
    totalprice() {
      return this.$store.getters.total
      // return (
      //   "￥" +
      //   this.$store.state.product
      //     .filter((item) => {
      //       return item.checked;
      //     })
      //     .reduce((prevalue, item) => {
      //       return prevalue + item.price * item.count;
      //     }, 0)
      // );
    },
    ischeck() {
         return this.$store.getters.isSelectAll
    },
  },
  mounted() {},
  methods: {
    btnclick() {
     if(this.ischeck){
       this.$store.state.product.forEach(item => {
         item.checked = false
       });
     }else{
       this.$store.state.product.forEach(item => {
         item.checked = true
       });
     }
    },
  },
};
</script>

<style scoped>
.bottombar {
  padding-left: 5px;
  background-color: #ccc;
  width: 100%;
  height: 35px;
  line-height: 35px;
}
.check {
  display: inline-block;
  margin-bottom: 6px;
}
.total {
  display: inline-block;
  margin-left: 8px;
}
.buy {
  width: 35%;
  float: right;
  background-color: var(--color-tint);
  text-align: center;
  color: #fff;
  font-size: 16px;
}
</style>
