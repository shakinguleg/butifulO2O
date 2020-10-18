<template>
  <div class="appointment">
    <all-header>
      <template v-slot:type>预约服务</template>
    </all-header>
    <div class="content">
      <div class="location">
        <span class="title">服务地点</span>
        <div class="user_info">
          <span>赵云</span>
          <span>177*****707</span>
        </div>
        <div>广东省广州市白云区汇侨路22号xx大厦xx室</div>
      </div>

      <div class="serveTime">
        <span>服务时间</span>
        <div class="right">
          <span>请选择</span>
          <span class="iconfont icon-right1"></span>
        </div>
      </div>

      <item :item="item"></item>

      <div class="coupon">
        <span>优惠券</span>
        <div class="right">
          <span>￥10</span>
          <span class="iconfont icon-right1"></span>
        </div>
      </div>

      <div class="cutdown">
        <div class="price">
          <span>商品金额</span>
          <span>￥{{ item.price }}</span>
        </div>
        <div class="cut_price">
          <span>优惠券</span>
          <span>-￥10</span>
        </div>
        <div class="count_price">
          <span>应付金额</span>
          <span>￥{{ item.price - 10 }}</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span>￥{{ item.price - 10 }}</span>
      <div @click="commitOrder">提交订单</div>
    </div>
  </div>
</template>

<script>
import header from "../../../components/header";
import item from "./components/item";
import { COMMIT_ORDER } from "../../../global_constant";

export default {
  components: {
    [header.name]: header,
    item,
  },
  date() {
    return {
      item: {},
    };
  },
  methods: {
    commitOrder() {
      // 提交订单
      this.$store.dispatch("serveItem/modifyState", {
        item_id: this.item.goodsId,
        state: COMMIT_ORDER,
      });
      //  支付界面
      this.$router.push({ name: "apply", query: { item: this.item } });
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
.appointment {
  position: relative;
  width: 100%;
  height: 100%;
  .content {
    padding-top: 4px;
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    top: 49px;
    bottom: 49px;
    background-color: rgba(242, 242, 242, 1);
    overflow: auto;
    .location {
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: 12px;
      color: #999;
      padding: 10px 5px;
      box-sizing: border-box;
      margin-bottom: 10px;
      background-color: white;
      .title {
        font-weight: bold;
        color: #333;
        font-size: 14px;
        margin-bottom: 10px;
      }
      .user_info {
        display: flex;
        justify-content: space-between;
        color: #333;
        font-size: 14px;
        margin-bottom: 5px;
        width: 50%;
      }
    }

    .serveTime,
    .coupon {
      margin-bottom: 10px;
      background-color: white;
      width: 100%;
      box-sizing: border-box;
      padding: 10px 5px;
      height: 40px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right {
        color: #999;
        display: flex;
        .iconfont {
          margin-left: 5px;
          font-size: 15px;
          transform: rotate(-180deg);
        }
      }
    }

    .price,
    .cut_price,
    .count_price {
      background-color: white;
      width: 100%;
      box-sizing: border-box;
      padding: 10px 5px;
      height: 40px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right {
        color: #999;
        display: flex;
        .iconfont {
          margin-left: 5px;
          font-size: 15px;
          transform: rotate(-180deg);
        }
      }
    }
  }

  .bottom {
    height: 49px;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    padding: 0 10px;
    bottom: 0;
    left: 0;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 20px;
      color: #f00;
    }
    div {
      font-size: 13px;
      color: white;
      background-color: rgba(22, 155, 213, 1);
      padding: 10px;
      border-radius: 4px;
    }
  }
}
</style>