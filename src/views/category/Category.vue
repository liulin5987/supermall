<template>
  <div id="category">
    <nav-bar class="cnavbar">
      商品分类
    </nav-bar>
    <tab-control 
        class="vice-tab"
        ref="tabcontrol1"
        :titles="titles"
        @tabClick="dtabclick"
        v-show="!isshow"
      />
    <scroll
      class="content sider"
      :pull-up-load="true"
      @pullUp="scrollrefresh"
      ref="cscroll"
    >
      <category-sider :sidedata="sidedata" @tabclick="tabchange" />
    </scroll>
    <scroll
      class="content"
      :probe="3"
      :pull-up-load="true"
      @pullUp="scrollrefresh"
      @onscroll="getposition"
      ref="cscroll1"
    >
      <div class="subitems">
        <category-sub-item :subdata="subdata" @imgload="imgload" />
      </div>
      <tab-control 
        ref="tabcontrol"
        :titles="titles"
        @tabClick="dtabclick"
        v-show="isshow"
      />
      <category-rec-item 
        :recommenditemdata="recommenditemdata"
        @recload="reimgload"
      />
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl"
import CategorySider from "./childcomponents/CategorySider";
import CategorySubItem from "./childcomponents/CategorySubItem";
import CategoryRecItem from "./childcomponents/CategoryRecItem"

import { debounce } from "common/tools.js";

import { getCategorydata, getSubcatagory,getSubDetail } from "network/category.js";

export default {
  name: "Category",
  data() {
    return {
      sidedata: [],
      subdata: [],
      refresh: null,
      titles:['综合','新品','销量'],
      currenttype:'pop',
      miniWallkey:10062603,
      recommenddata:{
        pop:[],
        new:[],
        sell:[]
      },
      recommenditemdata:[],
      tcheight:0,
      isshow:true
    };
  },
  components: {
    NavBar,
    Scroll,
    TabControl,
    CategorySider,
    CategorySubItem,
    CategoryRecItem
  },
  computed:{
   
  },
  methods: {
    //监听相关
    scrollrefresh() {
      this.$refs.cscroll && this.$refs.cscroll.refresh();
      this.$refs.cscroll1 && this.$refs.cscroll1.refresh();
    },
    imgload(){
      this.refresh()
      this.tcheight = this.$refs.tabcontrol.$el.offsetTop
    },
    reimgload(){
      this.refresh()
    },
    dtabclick(index){
      const types = ['pop','new','sell']
      this.currenttype = types[index]
      this.recommenditemdata = this.recommenddata[this.currenttype]
      this.$refs.tabcontrol1.currentindex = index  
      this.$refs.tabcontrol.currentindex = index
      // console.log(this.recommenddata['pop'])
    },
    getrecodata(miniWallkey){
      const types = ['pop','new','sell']
      for(let type of types){
        getSubDetail(miniWallkey,type).then((res) => {
          this.recommenddata[type] = res
          this.recommenditemdata = this.recommenddata[this.currenttype]
        })
      }
      this.recommenditemdata = this.recommenddata[this.currenttype]
    },
    getposition(position){
     
      // console.log(this.tcheight)
      // console.log(position)
      this.isshow = -position.y <= this.tcheight - 44
    },
    //网络相关
    //1.请求分类总数据
    getCatedata() {
      getCategorydata().then((res) => {
        // console.log(res)
        //1.1获得侧栏分类数据
        this.sidedata = res.data.category.list;
      });
    },

    //2.请求分类子类数据
    tabchange(maitKey,miniWallkey) {
      this.miniWallkey = miniWallkey
      //获取子分类数据
      getSubcatagory(maitKey).then((res) => {
        // console.log(res);
        this.subdata = res.data.list;
      });
      //获取对应推荐页数据
      this.getrecodata(miniWallkey)
      this.$refs.cscroll1.scrollTo(0,0,0)
      this.$refs.tabcontrol.currentindex = 0 
      this.dtabclick(0)
    },
  
  },
  created() {
    //侧栏信息获取
    this.getCatedata();
    //初始子分类信息获取
    getSubcatagory("3627").then((res) => {
      this.subdata = res.data.list;
    });
    
    this.refresh = debounce(this.scrollrefresh,100);
    //初始推荐栏信息获取
    this.getrecodata(10062603);
    
    // this.recommenditemdata = this.recommenddata
    // console.log(this.recommenditemdata)
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}
.cnavbar {
  background-color: var(--color-tint);
  color: #fff;
}
.sider {
  float: left;
  width: 25%;
}
.content {
  height: calc(100% - 49px - 44px);
  overflow: hidden;
}
.subitems {
  display: inline-block;
  width: 100%;
}
.vice-tab {
  position: fixed;
  width: 75%;
  top: 44px;
  right: 0;
  background-color: #fff;
  z-index: 9;

}
</style>
