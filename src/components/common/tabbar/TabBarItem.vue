<template>
    <div class="tab-bar-item">
        <div class="icon-text">
            主页
        </div>
        <img class="imgs" src="assets/img/tabbar/home_active.svg" alt="">
    </div>
</template>

<script>
    export default {
        name:'TabBarItem'
    }
</script>

<style scoped>
     .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
    }
    .imgs{
        width: 24px;
        height: 24px;

    }
</style>