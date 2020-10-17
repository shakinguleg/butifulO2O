<template>
  <div class="content">
    <div class="show_item" v-show="list.length != 0">
      <item v-for="item in list" :key="item.goodsId" :item="item"></item>
    </div>
    <div v-show="list.length == 0">该项为空</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import item from "../components/item";

export default {
  components: {
    item,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      list: (store) => store.serveItem.list,
    }),
  },
  mounted() {
    this.$store.dispatch(
      "serveItem/getList",
      this.$route.query.type ? this.$route.query.type : 1
    );
  },
  watch: {
    "$route.query.type": {
      handler(newVal) {
        this.$store.dispatch("serveItem/getList", this.$route.query.type);
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  top: 82px;
  bottom: 0;
  background-color: rgba(242, 242, 242, 1);
  padding: 20px;
  overflow: auto;
  .show_item {
    width: 100%;
  }
}
</style>