<template>
  <div id="sider">
    <div
      class="sideritem"
      v-for="(item, index) in sidedata"
      :key="index"
      :class="{ active: currentIndex == index }"
      @click="tabclick(index)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorySider",
  props: {
    sidedata: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  created(){
    
  },
  computed: {},
  methods: {
    tabclick(index) {
      this.currentIndex = index;
      let maitKey = this.sidedata[index].maitKey
      let miniWallkey = this.sidedata[index].miniWallkey
      this.$emit('tabclick', maitKey,miniWallkey)
    },
  },
};
</script>

<style scoped>

.sideritem {
  text-align: center;
  padding: 10px;
  background-color: #eee;
  color: #666;
  font-size: 12px;
  border-left: 3px solid #eee;
}
.active {
  background-color: #fff;
  color: var(--color-tint);
  border-left: 3px solid var(--color-tint);
}
</style>
