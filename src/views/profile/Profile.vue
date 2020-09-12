<template>
    <div id="profile">
        <nav-bar class="pronav">
            <div>我的档案</div>
        </nav-bar>
        <div class="info">
            <div class="avatar">
                <img  src="~assets/img/profile/avatar.svg" alt="">
            </div>
            <div class="infotxt">
                <div class="leftinfo">
                    <div>登陆/注册</div>
                    <div>
                        <img src="~assets/img/profile/phone.svg" alt="">
                        暂无绑定手机
                    </div>
                </div>
                <div class="rightinfo">
                   >  
                </div>
            </div>
        </div>
        <div class="midbar">
            <div class="baritem">
                <div class="num">
                    0.00<span>元</span>
                </div>
                <div class="desc">
                    我的余额
                </div>
            </div>
            <div class="baritem">
                <div class="num">
                    0<span>个</span>
                </div>
                <div class="desc">
                    我的优惠
                </div>
            </div>
            <div class="baritem">
                <div class="num">
                    0<span>分</span>
                </div>
                <div class="desc">
                    我的积分
                </div>
            </div>
        </div>
        <div class="detail">
            <div class="ditem">
                <img src="~assets/img/profile/message.svg" alt="">
                <div class="txt">我的消息</div>
            </div>
            <div class="ditem">
                <img src="~assets/img/profile/pointer.svg" alt="">
                <div class="txt">积分商城</div>
            </div>
            <div class="ditem">
                <img src="~assets/img/profile/vip.svg" alt="">
                <div class="txt">我的积分</div>
            </div>
        </div>
        <div class="footer">
            <div class="ditem">
                <img src="~assets/img/profile/cart.svg" alt="">
                <div class="txt">我的购物车</div>
            </div>
            <div class="ditem">
                <img src="~assets/img/profile/shopping.svg" alt="">
                <div class="txt">下载购物APP</div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar.vue"
    export default {
        name:'Profile',
        components:{
            NavBar
        }
    }
</script>

<style scoped>
    body{
        background-color: rgba(180,180,180,.4)!important;
    }
    .pronav {
        background-color: var(--color-tint);
        color: #fff;
    }
    #profile .info {
        display: flex;
        background-color: var(--color-tint);
        color: #fff;
    }
    .avatar {
        flex: 3;
    }
    .avatar img {
        margin-left: 10px;
        width: 60px;
        height: 60px;
        vertical-align: middle;
    }
    .infotxt {
        flex: 7;
        padding: 10px 20px 0;       
    }
    .infotxt .leftinfo {
        display: inline-block;
    }
    .leftinfo div:nth-child(1){
        font-size: 16px;
        font-weight: 600;
    }
    .leftinfo div:nth-child(2){
        font-size: 14px;
        margin-top: 5px;
    }
    .leftinfo div:nth-child(2) img {
         width: 15px;
         height: 15px;
         vertical-align: middle;
     }
    .infotxt .rightinfo {
        float: right;
        line-height: 60px;
        font-size: 18px;
    }
    .midbar {
        width: 100%;
        display: flex;
        color: #444;
        font-size: 16px;
        border-bottom: 10px solid rgba(180,180,180,.3);
    }
    .midbar .baritem {
        flex: 1;
        padding: 15px 5px;
        text-align: center;
        border-right: 1px solid rgba(180,180,180,.4);
    }
    .midbar .baritem:nth-child(3){
        border-right: none;
    }
    .baritem .num {
        font-size: 22px;
        color: var(--color-high-text);
    }
    .baritem .num span{
        color: #444;
        font-size: 16px;
    }
    .detail {
       border-bottom: 10px solid rgba(180,180,180,.3);  
    }
    .ditem {
        display: flex;
        line-height: 25px;
        padding: 0 5px;
    }
    .ditem img{
        flex: 1;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-top: 6px;
    }
    .txt {
        flex: 9;
        padding: 5px;
        border-bottom: 1px solid rgba(180,180,180,.4);
    }

    .footer .ditem:nth-child(2) .txt {
        border-bottom: none;
    }
</style>