<template>
    <div class="tabcontrol">
        <div class="tab-item" v-for="(item,index) in titles" :class="{active: currentindex === index}" :key="index" 
        @click="tabclick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TabControl',
        data(){
            return{
                currentindex:0
            }
        },
        props:{
            titles:{
                type:Array,
                data(){
                    return []
                }
            }
        },
        methods:{
            tabclick(index){
                this.currentindex = index
                this.$emit('tabClick',index)
            }
        }
    }
</script>

<style scoped>
    .tabcontrol{
        width: 100%;
        display: flex;
        background-color: #fff;
    }
    .tab-item{
        width: 30%;
        flex: 1;
        height: 35px;
        line-height: 35px;
        text-align: center;
    }
    .tab-item span{
        border-bottom: 3px solid #fff;
        padding-bottom: 4px;
    }
    /* 使用css实现点击变色效果 */
    /* .tab-item span:hover{
        color: var(--color-high-text);
        border-bottom: 2px solid var(--color-high-text);
    } */
    /* 使用js实现 */
    .active span{
        color: var(--color-high-text);
        border-bottom: 3px solid var(--color-high-text);
    }
</style>