<template>
  <div id="dtable">
    <div class="table">
      <table>
        <div v-if="productinfo.table && productinfo.table[0]">
          <tr v-for="(item, index) in productinfo.table[0]" :key="index">
            <td v-for="(citem, cindex) in item" :key="cindex">{{ citem }}</td>
          </tr>
        </div>

        <div
          v-if="productinfo.table && productinfo.table[1]"
          :class="{ short: productinfo.table[1][0].length < 3 }"
        >
          <tr v-for="(item, index) in productinfo.table[1]" :key="index">
            <td v-for="(citem, cindex) in item" :key="cindex">{{ citem }}</td>
          </tr>
        </div>
      </table>
      <table class="producttxt short" v-if="productinfo.info">
        <tr v-for="(item, index) in productinfo.info" :key="index">
          <td>{{ item.key }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTable",
  props: {
    productinfo: {
      type: Object,
      default: {},
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped>
table {
  width: 100%;
  padding: 15px;
  border-collapse: collapse;
}
table tr {
  border-bottom: 1px solid rgba(180, 180, 180, 0.5);
  width: 100%;
  display: flex;
}
table td {
  font-size: 14px;
  display: table-cell;
  vertical-align: middle;
  padding: 5px;
  flex: 1;
  text-align: center;
}
td:nth-child(1) {
  vertical-align: middle;
  text-align: left;
}
.short tr td:nth-child(1) {
  flex: 1;
}
.short tr td:nth-child(2) {
  flex: 3;
}
.producttxt td:nth-child(2) {
  text-align: left;
  color: var(--color-high-text);
}
</style>
