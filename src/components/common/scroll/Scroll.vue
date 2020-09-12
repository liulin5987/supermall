<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:'Scroll',
    props:{
      probe:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        scroll: null
      }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
          click:true,
          probeType: this.probe,
          pullUpLoad:this.pullUpLoad
      })
        this.scroll.on('scroll',(position) => {
          this.$emit('onscroll',position)
        })
        this.scroll.on('pullingUp',() => {
          this.$emit('pullUp')
          
        })
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>