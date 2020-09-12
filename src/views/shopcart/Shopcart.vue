<template>
  <div id="shopcar">
    <shop-nav/>
    <scroll class="carscroll" :pullUpLoad="true" ref="carscroll">
        <shop-item v-for="(item,index) in product" :key="index" :shopitem="item"/>
    </scroll>
    <shop-bottom-bar/>
  </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll.vue";
    import ShopNav from "./childcomponent/ShopNav";
    import ShopItem from "./childcomponent/ShopItem";
    import ShopBottomBar from "./childcomponent/ShopBottomBar"

    export default {
        name: "Shopcart",
        data(){
            return {
                product:[]
            }
        },
        components: {
            ShopNav,
            ShopItem,
            Scroll,
            ShopBottomBar
        },
        created(){
            this.product = this.$store.state.product
        },
        activated(){
            this.$refs.carscroll && this.$refs.carscroll.refresh() 
            // console.log(this.$store.getters.total) 
        }
    }; 
</script>

<style scoped>
    #shopcar {
        height: 100vh;
    }
    .carscroll {
        height: calc(100% - 49px - 44px - 30px);
        overflow: hidden;
    }
</style>
