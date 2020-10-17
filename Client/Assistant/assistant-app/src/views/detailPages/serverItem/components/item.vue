<template>
  <div class="item">
    <div class="top">
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
    <div class="bottom">
      <div class="button" v-if="item.state == 0" @click="deleteItem">删除</div>
      <div class="button">编辑</div>
      <div @click="change" class="button">
        {{ item.state == 1 ? "下架" : "上架" }}
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
    deleteItem(){
        this.$store.dispatch("serveItem/deleteItem",this.item.goodsId)
        this.$store.dispatch("serveItem/getList", this.item.state);
    }
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  box-sizing: border-box;
  margin-bottom: 20px;
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
      }
      .content {
        height: 60%;
        color: #aaa;
      }
      .wrap {
        display: flex;
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
  .bottom {
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    .button {
      width: 76px;
      padding: 5px 2px;
      font-size: 13px;
      text-align: center;
      border: 1px solid #999;
      margin-right: 10px;
      border-radius: 4px;
    }
  }
}
</style>