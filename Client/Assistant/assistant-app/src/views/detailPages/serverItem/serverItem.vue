<template>
  <div class="serverItem">
    <all-header :doSomething="test" :path="{ name: 'mine' }">
      <template v-slot:type>服务项目</template>
      <template v-slot:option>新增</template>
    </all-header>

    <div class="title">
      <router-link :to="{ name: 'content', query: { type: 1 } }"
        >上架中</router-link
      >
      <router-link :to="{ name: 'content', query: { type: 0 } }"
        >未上架</router-link
      >
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import header from "../../../components/header";
export default {
  components: {
    [header.name]: header,
  },
  methods: {
    test() {
      this.$router.push({ name: "addServeItem" });
    },
  },
};
</script>

<style lang="scss" scoped>
.serverItem {
  width: 100%;
  height: 100%;
  .title {
    display: flex;
    a {
      width: 50%;
      text-align: center;
      font-size: 13px;
      color: #333;
      line-height: 33px;
      height: 33px;
    }
  }
}
</style>