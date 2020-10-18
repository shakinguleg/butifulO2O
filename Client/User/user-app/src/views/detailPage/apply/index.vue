<template>
  <div class="apply">
    <all-header>
      <template v-slot:type>支付</template>
    </all-header>
    <div class="content">
      <div class="price">￥{{ item.price - 10 }}</div>
      <div class="wechat" @click="buy">
        <span></span>
        <span>微信支付</span>
      </div>
      <div class="apply" @click="buy">
        <span></span>
        <span>支付宝支付</span>
      </div>
    </div>
  </div>
</template>

<script>
import header from "../../../components/header";
import { APPLY } from "../../../global_constant";

export default {
  components: {
    [header.name]: header,
  },
  date() {
    return {
      item: {},
    };
  },
  methods: {
    buy() {
      // 支付
      this.$store.dispatch("serveItem/modifyState", {
        item_id: this.item.goodsId,
        state: APPLY,
      });
      //  支付完成界面
      this.$router.push({ name: "applyFinish" });
    },
  },
  watch: {
    "$route.query": {
      handler(newVal) {
        if (typeof newVal.item == "string") {
          this.item = JSON.parse(localStorage.getItem("item"));
        } else if (newVal) this.item = newVal.item;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  top: 49px;
  bottom: 0px;
  left: 0;
  right: 0;
  background-color: #eee;
  padding-top: 5px;
  .price {
    width: 100%;
    height: 100px;
    background-color: white;
    font-size: 28px;
    color: #d9001b;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .wechat,
  .apply {
    font-size: 14px;
    height: 60px;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    margin-bottom: 5px;
  }
}
</style>