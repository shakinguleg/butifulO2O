<template>
  <div>
    <all-header :path="{ name: 'beautify' }">
      <template v-slot:type>服务项目</template>
    </all-header>
    <div class="content">
      <item v-for="item in list" :key="item.goodsId" :item="item"></item>
    </div>
  </div>
</template>

<script>
import header from "../../../components/header";
import item from "./components/item";
import { mapState } from "vuex";

export default {
  components: {
    [header.name]: header,
    item,
  },
  computed: {
    ...mapState({
      list: (store) => store.doorService.list,
    }),
  },
  mounted() {
    this.$store.dispatch("doorService/getList");
  },
};
</script>

<style lang="scss" scoped>
.content {
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  top: 49px;
  bottom: 0;
  background-color: rgba(242, 242, 242, 1);
  padding: 10px;
  overflow: auto;
}
</style>