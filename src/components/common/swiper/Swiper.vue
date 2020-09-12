<template>
  <div id="swiper">
    <!-- 轮播图片内容 -->
    <div class="swiper" @touchstart = "touchStart" @touchmove = "touchMove" @touchend = "touchEnd">
      <slot></slot>
    </div>
    <!-- 翻页插槽 -->
    <slot name="arrows">
    </slot>
    <!-- 白点指示器 -->
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div class="indi-item" v-for="(item, index) in slideCount" :class="{active:index === currentIndex-1}" :key="index"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      slideCount: 0, //元素个数，传入小白点指示器用来展示图片顺序和判断图片组是否循环结束用
      totalWidth: 0, //swiper的宽度，由swiper的offset传入
      swiperStyle: {}, //swiper样式
      currentIndex: 1, //当前的index
      scrolling: false //是否正在滚动
    };
  },
  mounted: function() {
    //1.操作DOM，在前后添加Slide，在第一页之前添加最后一页的图片，最后一页后面添加第一页的图片内容，防止轮播时出现空白
    setTimeout(() => {
      this.handleDom();
      //2.开启定时器，启动轮播
      this.startTimer();
    }, 500);
  },
  methods: {
    //设置定时器，传入图片转播时间，同时currentIndex开始计数
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    //设置停止器
    stopTimer() {
      window.clearInterval(this.playTimer);
    },
    //设定滚动距离为一图片宽和滚动的动画时间
    scrollContent(currentPosition) {
      //1.标记正在滚动
      this.scrolling = true;
      //2.开始滚动动画
      this.swiperStyle.transition = "transform" + this.animDuration + "ms";
      this.setTransform(currentPosition);
      //3.判断滚动到的位置，如果到达图片组的首尾页时，进行一次重制，重制画面为第一页或最后一页
      this.checkPosition();
      //4.标记滚动完成
      this.scrolling = false;
    },
    //校验正确的位置
    checkPosition() {
      window.setTimeout(() => {
        //1.校验正确的位置
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        //2.结束移动后的回调
        this.$emit('transitionEnd',this.currentIndex-1);
      },this.animDuration);
    },
    //设置滚动的位置
    setTransform(position){
        this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px,0,0)`;
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px,0,0)`;
    },
    //操作dom，在dom前添加Slide
    handleDom(){
        //1.获取要操作的元素
        let swiperEl = document.querySelector('.swiper');
        let slidesEls = swiperEl.getElementsByClassName('slide');
        //2.保存个数
        this.slideCount = slidesEls.length;
        //3.如果大于1个，在前后分别添加一个slide，保持滚动不会出现留白现象
        if(this.slideCount > 1){
            let cloneFirst = slidesEls[0].cloneNode(true);
            let cloneLast = slidesEls[this.slideCount-1].cloneNode(true);
            swiperEl.insertBefore(cloneLast,slidesEls[0]);
            swiperEl.appendChild(cloneFirst);
            //获得初始图片宽度
            this.totalWidth = swiperEl.offsetWidth;
            //获取图片初始样式
            this.swiperStyle = swiperEl.style;
        }
        //4.让swiper元素，显示第一个，不加这一步移动的话，默认显示的会是上面插入的最后一张图片
        this.setTransform(-this.totalWidth)
    },
    //拖动事件的处理
    touchStart(e){
        //1.如果正在滚动，不可以拖动
        if(this.scrolling) return;
        //2.触摸轮播图时停止计时器
        this.stopTimer();
        //3.保存开始滚动的位置
        this.startX = e.touches[0].pageX;
    },
    touchMove(e){
        //1.计算出用户拖动的距离
        this.currentX = e.touches[0].pageX;
        this.distance = this.currentX - this.startX;
        //如果用户不拖动图片，此时应该轮播到的距离
        let currentPosition = -this.currentIndex * this.totalWidth;
        //加上用户拖动距离
        let moveDistance = this.distance + currentPosition;
        //2.设置当前的位置
        this.setTransform(moveDistance)
    },
    touchEnd(e){
        //1.获取移动的距离
        let currentMove = Math.abs(this.distance);
        //2.判断最终的距离
        if(this.distance === 0){
            return
        }else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio){
            this.currentIndex--
        }else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio){
            this.currentIndex++
        }
        //3.移动到正确的位置
        this.scrollContent(-this.currentIndex * this.totalWidth);
        //4.移动完成后重新开启定时器
        this.startTimer()
    },
    //控制上一个，下一个，如果有翻页键时可以使用
    previous(){
        this.changeItem(-1)
    },
    next(){
        this.changeItem(1)
    },
    changeItem(num){
        //1.停止计时器
        this.stopTimer();
        //2.修改index和位置
        this.currentIndex += num;
        this.scrollContent(-this.currentIndex * this.totalWidth);
        //3.添加定时器
        this.startTimer()
    }
  }
};
</script>

<style scoped>
    #swiper {
        overflow: hidden;
        position: relative;
    }
    .swiper {
        display: flex;
    }
    .indicator {
        display: flex;
        justify-content: center;
        position: absolute;
        width: 100%;
        bottom: 8px;
    }
    .indi-item {
        box-sizing: border-box;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #fff;
        line-height: 8px;
        text-align: center;
        font-size: 12px;
        margin: 0 5px;
    }
    .indi-item.active {
        background-color: rgba(212,62,46,1);
    }
</style>
