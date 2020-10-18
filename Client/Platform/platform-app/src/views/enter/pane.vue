<template>
  <div class="pane">
    <span class="title">XXX平台管理系统</span>
    <div class="wrap">
      <div>登录</div>
      <!-- 输入框 -->
      <a-input
        placeholder="账号"
        class="input"
        size="large"
        v-model="account"
      />
      <a-input
        placeholder="密码"
        class="input"
        size="large"
        v-model="password"
      />
      <div class="bottom">
        <div class="left"><input type="checkbox" /><span>记住账号</span></div>
        <span class="right">找回密码</span>
      </div>

      <!-- 登录按钮 -->
      <a-button type="primary" block size="large" @click="login">
        登录
      </a-button>
    </div>
  </div>
</template>

<script>
import { Input } from "ant-design-vue";
import { LOGIN_URL, REGISTER_URL } from "../../api/url";
import http from "../../api/http";

export default {
  components: {
    [Input.name]: Input,
  },
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    async login() {
      var a = await http.post(
        LOGIN_URL,
        `phone=${this.account}&password=${this.password}`
      );
      if (a.data.code == 0) {
        this.$router.replace({ name: "home" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pane {
  width: 500px;
  height: 400px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  .title {
    display: inline;
  }
  .wrap {
    padding: 20px 30px;
    margin: 30px 0 0 50px;
    width: 400px;
    border: 2px solid black;
    .input {
      &:nth-of-type(1) {
        margin-top: 30px;
      }
      &:nth-of-type(2) {
        margin-top: 10px;
      }
    }
    .bottom {
      margin: 30px 0;
      overflow: hidden;
      .left {
        float: left;
      }
      .right {
        float: right;
      }
    }
  }
}
</style>