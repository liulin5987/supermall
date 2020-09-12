<template>
  <div id="details">
    <detail-nav class="dnav" @navclick="navclick" ref="dnav" />
    <scroll
      class="content"
      :probe="3"
      ref="dscroll"
      :pull-up-load="true"
      @onscroll="navchange"
      @pullUp="dimgload"
    >
      <detail-swiper :swiperimg="swiperimgs" />
      <detail-item-title :goodsdata="goodsdata" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-item-detail
        :detailtitle="detailtitle"
        :detailimgs="detailimgs"
        @dimgload="ondimgload"
      />
      <detail-table :productinfo="productinfo" ref="table" />
      <detail-rate :rate="rate" :crate="crate" ref="rate" />
      <good-list :goods="recommend" ref="recommend" />
    </scroll>
    <back-top v-show="show" @click.native="back" />
    <bottom-bar @addcart="addcart" />
    <!-- <div class="tips" v-if="tipshow">~已加入购物车</div> -->
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import GoodList from "components/content/goods/GoodList";
import BackTop from "components/content/backtop/BackTop";

import DetailNav from "./childcomponents/DetailNav";
import DetailSwiper from "./childcomponents/DetailSwiper";
import DetailItemTitle from "./childcomponents/DetailItemTitle";
import DetailShopInfo from "./childcomponents/DetailShopInfo";
import DetailItemDetail from "./childcomponents/DetailItemDetail";
import DetailTable from "./childcomponents/DetailTable";
import DetailRate from "./childcomponents/DetailRate";
import BottomBar from "./childcomponents/BottomBar";

import {
  getitemdata,
  goods,
  shopInfo,
  productinfo,
  getRecommend,
} from "network/detail.js";
import { debounce } from "common/tools.js";

export default {
  name: "Details",
  data() {
    return {
      iid: "",
      swiperimgs: [],
      goodsdata: {},
      shopInfo: {},
      detailimgs: [],
      detailtitle: [],
      productinfo: {},
      crate: 0,
      rate: [],
      recommend: [],
      navYs: [],
      refresh: null,
      currentNav: 0,
      show: false,
      // product:{},这里如果通过data只传入一个product，后续会无法正常监听对象属性的变化
      tipshow: false,
    };
  },
  components: {
    Scroll,
    DetailNav,
    DetailSwiper,
    DetailItemTitle,
    DetailShopInfo,
    DetailItemDetail,
    DetailTable,
    DetailRate,
    GoodList,
    BackTop,
    BottomBar,
  },
  methods: {
    //监听相关
    //将获得部件高度的命令放在图片加载的监听函数中，每次图片加载都动态更新
    dimgload() {
      this.$refs.dscroll && this.$refs.dscroll.refresh();
      this.navYs = [];
      this.navYs.push(0);
      this.navYs.push(this.$refs.table.$el.offsetTop);
      this.navYs.push(this.$refs.rate.$el.offsetTop);
      this.navYs.push(this.$refs.recommend.$el.offsetTop);
      this.navYs.push(Number.MAX_VALUE);
    },
    ondimgload() {
      this.refresh();
    },
    navclick(index) {
      this.refresh();
      this.$refs.dscroll.scrollTo(0, -this.navYs[index]);
      console.log(this.refresh())
    },
    navchange(position) {
      // console.log(position)
      for (let i = 0; i < this.navYs.length - 1; i++) {
        // console.log(this.navYs)
        if (
          this.currentNav != i &&
          -position.y >= this.navYs[i] && -position.y < this.navYs[i + 1]
        ) {
          this.currentNav = i;
          this.$refs.dnav.currentindex = i;
        }
      }
      this.show = Math.abs(position.y) > 800;
    },
    back() {
      this.$refs.dscroll.scrollTo(0, 0);
    },
    //添加购物车
    addcart() {
      const product = {};
      product.checked = true;
      product.img = this.swiperimgs[0];
      product.iid = this.goodsdata.iid;
      product.title = this.goodsdata.title;
      product.price = this.goodsdata.lowPrice;
      product.desc = this.goodsdata.desc;
      this.$store.dispatch("additems", product).then((res) => {
        this.$toast.show(res,1000)
      })
      // this.product.checked = true
      // this.product.img = this.swiperimgs[0]
      // this.product.iid = this.goodsdata.iid
      // this.product.title = this.goodsdata.title
      // this.product.price = this.goodsdata.lowPrice
      // this.product.desc = this.goodsdata.desc
      // this.$store.dispatch('additems',this.product)
      // this.tipshow = true;
      // setTimeout(() => {
      //   this.tipshow = false;
      // }, 1000);

      // console.log(this.$store.state.items)
    },
    //网络相关 
    getitem() {
      getitemdata(this.iid).then((res) => {
        console.log(res);
        //获得轮播图片
        this.swiperimgs = res.result.itemInfo.topImages;
        //获得商品基本信息
        this.goodsdata = new goods(
          res,
          res.result.itemInfo,
          res.result.columns,
          res.result.shopInfo.services
        );
        //获得商家基本信息
        this.shopInfo = new shopInfo(res.result.shopInfo);
        //获得详情页信息
        this.detailimgs = res.result.detailInfo.detailImage[0].list;
        this.detailtitle = res.result.promotions
          ? res.result.promotions.list
          : [];
        this.productinfo = new productinfo(res.result.itemParams);
        //获取用户评价
        this.crate = res.result.rate.crate;
        this.rate = res.result.rate.list;
        //获取推荐数据
        getRecommend().then((res) => {
          console.log(res);
          this.recommend = res.data.list;
        });
      });
    },
  }, 
  created() {
    this.iid = this.$route.params.iid;
    this.getitem();
    this.refresh = debounce(this.dimgload, 100);
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$bus.$emit("onenter");
    });
  },
  beforeRouteLeave(to, from, next) {
    this.$bus.$emit("onleave");
    next();
  },
  mounted() {
    this.dimgload();
  },
};
</script>

<style scoped>
#details {
  height: 100vh;
}
.dnav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 49px);
}
.tips {
  background-color: rgba(247, 223, 89, 0.9);
  text-align: center;
  line-height: 40px;
  width: 120px;
  height: 40px;
  border-radius: 8px;
  position: fixed;
  top: 40vh;
  left: 30%;
}
</style>
