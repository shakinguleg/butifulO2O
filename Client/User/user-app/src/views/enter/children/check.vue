<template>
  <div class="check">
    <span class="title">请输入验证码</span>
    <span class="content">验证码已发送至你的手机</span>
    <span class="phone_num">{{ phoneNum }}</span>
    <div class="prop">
      <span>6位数字验证码</span><span class="time">59s</span>
    </div>
    <div class="number_wrap">
      <input
        v-model.number="numData"
        type="number"
        class="back"
        @click="test"
      />
      <div class="show">
        <div
          class="check_num"
          v-for="index in 6"
          :key="index"
          ref="show_box"
        ></div>
      </div>
    </div>
    <span>
      未注册用户将自动为您创建账号，输入验证码及表示同意
      <a href="#">《用户注册协议》</a>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import http from "../../../api/http";
import { LOGIN_URL } from "../../../api/url";

export default {
  data() {
    return {
      numData: "",
    };
  },
  methods: {
    test() {},
  },
  computed: {
    ...mapState({
      phoneNum: (store) => store.enter.phoneNum,
    }),
  },
  watch: {
    numData: {
      handler(newVal) {
        //   数字有变化时重置
        this.$refs.show_box.length != 0 &&
          this.$refs.show_box.map((item) => {
            item.innerText = "";
          });
        var a = newVal + "";
        if (a.length >= 6) {
          // 输入完成
          setTimeout(() => {
            this.numData = "";
            // 跳转到接单页面
            http
              .post(LOGIN_URL, {
                phone: 18270694696,
                password: 1234,
              })
              .then((res) => {
                if (res.data.code == 0) this.$router.push("/main");
              });
          }, 300);
        }
        // 重新赋值
        this.$refs.show_box.length ==6 &&
          Array.from(this.numData + "").map((item, index) => {
            this.$refs.show_box[index].innerText = item;
          });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.check {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #999999;
  padding: 30px 20px 0;
  .title {
    font-size: 18px;
    color: #333;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .content,
  .phone_num {
    font-size: 14px;
  }
  .prop {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }
  .number_wrap {
    padding: 30px 0;
    position: relative;
    .back {
      top: 30px;
      left: 0;
      width: 98%;
      height: 35px;
      position: absolute;
      z-index: 2;
      border: none;
    }
    .show {
      display: flex;
      justify-content: space-between;
      background-color: white;
      pointer-events: none;
      position: relative;
      z-index: 3;
      .check_num {
        border: 1px solid #999;
        width: 35px;
        height: 35px;
        font-size: 20px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>