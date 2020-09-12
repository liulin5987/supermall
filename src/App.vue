<template>
  <div id="app">
    <keep-alive exclude="Details">
      <router-view />
    </keep-alive>
    <main-tab-bar ref="tabbar" v-if="isshow" />
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar.vue";

export default {
  name: "App",
  data() {
    return {
      isshow: true,
    };
  },
  components: {
    MainTabBar,
  },
  mounted() {
    this.$bus.$on("onenter", () => {
      this.isshow = false
    });
    this.$bus.$on("onleave",() =>{
      this.isshow = true
    })
  },
};
</script>
<style>
@import "./assets/css/base.css";
</style>
