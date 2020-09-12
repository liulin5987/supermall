<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <img src="~assets/img/common/back.svg" alt="" @click="back" />
      </template>
      <template>
        <div class="title">
          <div
            class="titleitem"
            v-for="(item, index) in title"
            :key="index"
            @click="titleclick(index)"
            :class="{ active: currentindex === index }"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";



export default {
  name: "DetailNav",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentindex: 0,
    };
  },
  components: {
    NavBar,
  },
  computed: {},
  methods: {
    titleclick(index) {
      this.currentindex = index;
      this.$emit('navclick',index)
    },
    back() {
      this.$router.back()
    },
   
  },
  created(){
  
  },
};
</script>

<style scoped>
.title{
  display: flex;
}
.titleitem {
  flex: 1;
  font-size: 14px;
}
.left img {
  margin-top: 12px;
}
.active {
  color: var(--color-high-text);
}
</style>
