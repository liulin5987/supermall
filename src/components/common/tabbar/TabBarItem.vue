<template>
    <div class="tab-bar-item" @click="itemclick">
        <div v-if="isActive">
            <slot name="icon-img-active"></slot>
        </div>
        <div v-else>
            <slot name="icon-img"></slot>            
        </div>
        <div :style="activeStyle">
            <slot name="icon-text"></slot>
        </div>
        
        <!-- <img src="~assets/img/tabbar/home.svg" alt="">
        <div>首页</div> -->
    </div>
</template>

<script>
    export default {
        name:'TabBarItem',
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'var(--color-high-text)'
            }
        },
        data(){
            return{
                // isactive:true,
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle(){
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
        methods:{
            itemclick(){
                return   this.$router.replace(this.path)
                this.$emit('pagechange')
            }
            
        }
    }
</script>

<style scoped>
     .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }
    img{
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-top: 5px;
    }
    /* .active{
        color: var(--color-high-text);
    } */
</style>