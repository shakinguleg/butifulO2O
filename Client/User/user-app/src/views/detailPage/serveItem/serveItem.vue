<template>
  <div class="serveItem">
    <all-header :path="{ name: 'doorService' }">
      <template v-slot:type>项目详情</template>
    </all-header>
    <div class="item_content">
      <div class="img"></div>
      <div class="wrap">
        <div class="price"><span class="dollor">￥</span>{{ item.price }}</div>
        <div class="title">{{ item.title }}</div>
        <div class="content">{{ item.content }}</div>
      </div>
      <div class="comment">评论区</div>
    </div>
    <div class="bottom">
      <div class="beautify">美体师</div>
      <span class="com">立即预约</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import header from "../../../components/header";

export default {
  components: {
    [header.name]: header,
  },
  computed: {
    ...mapState({
      item: (store) => store.doorService.serveItem,
    }),
  },
  mounted() {
    this.$store.dispatch("doorService/getServeItem", {
      item_id: this.$route.query.id,
    });
  },
};
</script>

<style lang="scss" scoped>
.serveItem {
  width: 100%;
  height: 100%;

  .item_content {
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    top: 49px;
    bottom: 49px;
    background-color: rgba(242, 242, 242, 1);
    overflow: auto;

    .img {
      width: 100%;
      height: 250px;
      background-color: #ccc;
    }
    .wrap {
      box-sizing: border-box;
      margin-bottom: 10px;
      padding: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: white;

      .price {
        font-weight: bold;
        margin-bottom: 15px;
        .dollor {
          font-size: 14px;
        }
        font-size: 24px;
        color: #d9001b;
      }
      .title {
        margin-bottom: 10px;
        font-size: 14px;
        color: #333;
      }
      .content {
        font-size: 13px;
        color: #999;
      }
    }
    .comment {
      box-sizing: border-box;
      padding: 10px;
      width: 100%;
      background-color: white;
      height: 500px;
      margin-bottom: 20px;
    }
  }

  .bottom {
    box-sizing: border-box;
    position: absolute;
    height: 49px;
    width: 100%;
    background-color: white;
    bottom: 0;
    left: 0;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    .com {
      padding: 10px;
      background-color: red;
      border-radius: 4px;
      color: white;
    }
  }
}
</style>