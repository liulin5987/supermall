<template>
  <div class="maintabbar">
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:icon-img-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </template>
        <template v-slot:icon-img>
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </template>
        <template v-slot:icon-text>
          <div>
            主页
          </div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="category">
        <template v-slot:icon-img-active>
          <img src="~assets/img/tabbar/category_active.svg" alt="" />
        </template>
        <template v-slot:icon-img>
          <img src="~assets/img/tabbar/category.svg" alt="" />
        </template>
        <template v-slot:icon-text>
          <div>
            分类
          </div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="shopcart">
        <template v-slot:icon-img-active>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
        </template>
        <template v-slot:icon-img>
          <img src="~assets/img/tabbar/shopcart.svg" alt="" />
        </template>
        <template v-slot:icon-text>
          <div>
            购物车
          </div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="profile">
        <template v-slot:icon-img-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt="" />
        </template>
        <template v-slot:icon-img>
          <img src="~assets/img/tabbar/profile.svg" alt="" />
        </template>
        <template v-slot:icon-text>
          <div>
            我的
          </div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
  
</style>
