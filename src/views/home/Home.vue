<template>
  <div id="home">
    <nav-bar class="nav-bar">购物街</nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      ref="tabcontrol1"
      @tabClick="tabClick"
      v-show="isfixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe="3"
      @onscroll="getposition"
      :pull-up-load="true"
      @pullUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperload="gettabheight" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        ref="tabcontrol"
        @tabClick="tabClick"
        v-show="!isfixed"
      />
      <good-list :goods="showgoods" />
    </scroll>
    <back-top @click.native="backtop" v-show="btshow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodList from "components/content/goods/GoodList";
import BackTop from "components/content/backtop/BackTop";

import HomeSwiper from "./childcomponents/HomeSwiper";
import RecommendView from "./childcomponents/RecommendView";
import FeatureView from "./childcomponents/FeatureView";

import { getHomeMultidata, getGoodsDetail } from "network/home.js";
import { debounce } from "common/tools.js";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    BackTop,
    GoodList,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currenttype: "pop",
      btshow: false,
      isfixed: false,
      height: 0,
      scrolly: 0,
    };
  },
  created() {
    this.getHomeMul();
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.imgload, 100);
    this.$bus.$on("imgload", () => { 
      refresh();
    });
  },
  updated() {},
  computed: {
    showgoods() {
      return this.goods[this.currenttype].list;
    },
  },
  activated(){
    this.$refs.scroll.refresh()  
    this.$refs.scroll.scrollTo(0, this.scrolly,0)    
  },
  deactivated(){
    this.scrolly = this.$refs.scroll.scroll.y
  },
  methods: {
    // 监听相关方法
    tabClick(index) {
      const types = ["pop", "new", "sell"];
      this.currenttype = types[index];
      this.$refs.tabcontrol1.currentindex = index;
      this.$refs.tabcontrol.currentindex = index;
      this.$refs.scroll.scrollTo(0,-(this.height-45),0)
    },
    backtop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    getposition(position) {
      this.btshow = Math.abs(position.y) > 800;
      this.isfixed = Math.abs(position.y) > this.height - 35;
    },
    loadMore() {
      this.getGoods(this.currenttype);
      setTimeout(() => {
        this.$refs.scroll.finishPullUp();
      }, 1000);
    },
    imgload() {
      this.$refs.scroll.refresh();
    },
    gettabheight() {
      this.height = this.$refs.tabcontrol.$el.offsetTop;
    },
    // 网络相关方法
    getHomeMul() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getGoodsDetail(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
 
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  height: calc(100% - 49px);
  width: 100%;
  overflow: hidden;
}
</style>
