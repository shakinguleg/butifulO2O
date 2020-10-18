<template>
  <div class="login_wrap">
    <div class="login">
      <input placeholder="输入手机号" class="phoneNum" v-model="phoneNum" />

      <button class="button" @click="verify">获取验证码</button>
      <div class="title">登录/注册</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNum: "",
    };
  },
  methods: {
    verify() {
      if (this.phoneNum) {
        this.$store.commit("enter/setPhoneNum", this.phoneNum);
        this.$router.push({ name: "check" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login_wrap {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  width: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .phoneNum {
    width: 100%;
    height: 40px;
    font-size: 16px;
    text-align: center;
    border: none;
    border-bottom: 1px solid #aaaaaa;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  .button {
    margin-top: 20px;
    font-size: 13px;
    padding: 10px 30px;
    background-color: #1989fa;
    border-radius: 4px;
    color: white;
  }
  .title {
    position: absolute;
    top: -70px;
    left: 50%;
    font-size: 18px;
    color: #333;
    transform: translate(-50%, 0);
    font-weight: bold;
  }
}
</style>