<template>
    <div id="recommendview">
        <div class="recommenditem" v-for="(item, index) in recommends" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"RecommendView",
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    #recommendview{
        display: flex;
        padding: 8px 0px 15px ;
        border-bottom: 8px solid #eee;
    }
    .recommenditem{
        flex: 1;
        text-align: center;
        font-size: 14px;
    }
    .recommenditem img{
        width: 80%;
    }
</style>