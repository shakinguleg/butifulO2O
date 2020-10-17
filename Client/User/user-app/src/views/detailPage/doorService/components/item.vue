<template>
  <div class="item">
    <div class="top" @click="goServeItemDetail">
      <div class="img"></div>
      <div class="right">
        <span class="title">
          {{ item.title }}
        </span>
        <span class="content">{{ item.content }}</span>
        <div class="wrap">
          <span class="price">￥{{ item.price }}</span>
          <span class="time">{{ item.time }}分钟</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {},
  },
  methods: {
    change() {
      if (this.item.state == 1) {
        //   商品下架
        this.$store.dispatch("serveItem/itemOff", this.item.goodsId);
      } else {
        // 上架
        this.$store.dispatch("serveItem/itemOn", this.item.goodsId);
      }
      this.$store.dispatch("serveItem/getList", this.item.state);
    },
    deleteItem() {
      this.$store.dispatch("serveItem/deleteItem", this.item.goodsId);
      this.$store.dispatch("serveItem/getList", this.item.state);
    },
    goServeItemDetail() {
      // 去往服务详情页
      this.$router.push({ name: "serveItem", query: { id: this.item.goodsId } });
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  box-sizing: border-box;
  margin-bottom: 10px;
  .top {
    display: flex;
    width: 100%;
    .img {
      width: 100px;
      height: 100px;
      background-color: #666;
    }
    .right {
      margin-left: 10px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        color: #333;
        font-size: 14px;
      }
      .content {
        height: 60%;
        color: #aaa;
        font-size: 12px;
      }
      .wrap {
        display: flex;
        font-size: 12px;
        .price {
          color: #f00;
        }
        .time {
          margin-left: 10px;
          color: #333;
        }
      }
    }
  }
}
</style>