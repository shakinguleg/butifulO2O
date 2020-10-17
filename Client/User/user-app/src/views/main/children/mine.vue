<template>
  <div class="mine">
    <header>
      <div class="user_photo"></div>
      <div class="right">
        <span class="account">xxx</span>
        <span class="person_intro">xxxxxxxxxxxxxxxxxxxx</span>
      </div>
      <!-- 图标 -->
      <span class="iconfont"></span>
    </header>

    <div class="type" v-for="(item, index) in list" :key="index">
      <div
        class="item"
        v-for="(i, ind) in item"
        :key="ind"
        @click="handler(i.name)"
      >
        <div class="wrap">
          <div class="photo"></div>
          <span>{{ i.title }}</span>
        </div>
        <div :class="{ spacer: ind != item.length - 1 }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        [
          { title: "实名认证", name: "auth" },
          { title: "收款账号", name: "bankAccount" },
        ],
        [
          { title: "我的订单", name: "order" },
          { title: "服务项目", name: "serverItem" },
          { title: "服务范围", name: "serverRange" },
        ],
        [{ title: "收到的评价", name: "evaluate" }],
        [{ title: "设置", name: "setting" }],
      ],
    };
  },
  methods: {
    handler(path) {
      this.$router.push({ name: path });
    },
  },
};
</script>

<style lang="scss" scoped>
.mine {
  background-color: #eee;
  overflow: auto;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 49px;
  header {
    width: 100%;
    height: 120px;
    display: flex;
    background-color: white;
    align-items: center;
    .user_photo {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #999;
      margin: 0 20px;
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .account {
        color: #333;
        font-size: 14px;
        margin-bottom: 20px;
      }
      .person_intro {
        color: #999;
        font-size: 12px;
      }
    }
  }

  .type {
    background-color: white;
    width: 100%;
    margin-top: 10px;
    font-size: 14px;
    .item {
      display: flex;
      padding: 5px 10px;
      position: relative;
      .wrap {
        display: flex;
        height: 40px;
        width: 100%;
        align-items: center;
        .photo {
          width: 20px;
          height: 20px;
          border-radius: 3px;
          background-color: #999;
        }
        span {
          margin-left: 10px;
        }
      }
      .spacer {
        width: calc(100% - 20px);
        height: 1Px;
        background-color: #999;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }
}
</style>