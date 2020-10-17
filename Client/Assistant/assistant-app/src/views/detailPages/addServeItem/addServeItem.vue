<template>
  <div class="serverItem">
    <all-header>
      <template v-slot:type>新增项目</template>
    </all-header>
    <div class="content">
      <div>
        <span class="name"> 项目名称 </span>
        <textInput v-model="title" class="TI TIcommon"></textInput>
      </div>
      <div class="spacer"></div>
      <div class="wrap">
        <div class="price">
          <span class="name">项目价格</span>
          <textInput v-model="price" class="TIcommon"></textInput>
        </div>
        <div class="time">
          <span class="name">服务时长</span>
          <textInput v-model="time" class="TIcommon"></textInput>
        </div>
      </div>
      <div class="spacer"></div>
      <div>
        <span class="name">项目介绍</span>
        <textInput v-model="intro" class="TIcommon"></textInput>
      </div>
      <div class="spacer"></div>
      <div>
        <span class="name">项目主图</span>
        <div></div>
      </div>
      <div class="spacer"></div>
      <div>
        <span class="name">项目图片</span>
        <div></div>
      </div>
      <div class="spacer"></div>
      <van-button type="info" class="button" size="large" @click="addServeItem"
        >保存</van-button
      >
    </div>
  </div>
</template>

<script>
import header from "../../../components/header";
import textInput from "../../../components/textInput";
import http from "../../../api/http";
import { ADD_SERVE_ITEM_URL } from "../../../api/url";

export default {
  components: {
    [header.name]: header,
    [textInput.name]: textInput,
  },
  data() {
    return {
      title: "",
      price: "",
      intro: "",
      time: "",
    };
  },
  methods: {
    async addServeItem() {
      let result = await http.post(ADD_SERVE_ITEM_URL, {
        title: this.title,
        price: this.price,
        intro: this.intro,
        time: this.time,
      });
      if (result.data.code == 0) {
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.serverItem {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  .content {
    box-sizing: border-box;
    width: 100%;
    flex: 1;
    padding: 10px;
    box-sizing: border-box;
    .TIcommon {
      height: 30px;
    }
    .spacer {
      width: 100%;
      height: 20px;
    }
    .name {
      font-size: 14px;
      color: #333;
    }

    .wrap {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .price,
      .time {
        width: 48%;
      }
    }
    .TI {
      width: 100%;

      font-size: 14px;
    }
    .button {
      font-size: 13px;
      width: 94%;
      height: 40px;
      border-radius: 6px;
      color: white;
    }
  }
}
</style>