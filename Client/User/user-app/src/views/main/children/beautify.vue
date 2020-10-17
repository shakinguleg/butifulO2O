<template>
  <div class="beautify">
    <div class="banner"></div>
    <div class="function">
      <li
        class="item"
        v-for="(item, index) in function_item"
        :key="index"
        @click="index == 1 && $router.push(item.path)"
      >
        <div class="img"></div>
        <span>{{ item.item_name }}</span>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      function_item: [
        { logo: "", item_name: "到店体验", path: { name: "storeExperience" } },
        { logo: "", item_name: "上门服务", path: { name: "doorService" } },
        { logo: "", item_name: "门店风采", path: { name: "storeStyle" } },
        { logo: "", item_name: "美体师风采", path: { name: "beautifyStyle" } },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.beautify {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 49px;
  background-color: #eee;
  .banner {
    width: 100%;
    height: 170px;
    background-color: #666;
    margin-bottom: 10px;
  }
  .function {
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      width: 48%;
      height: 170px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: white;
      margin-bottom: 10px;
      .img {
        width: 30%;
        height: 30%;
        background-color: aqua;
        margin-bottom: 10px;
      }
      span {
        font-size: 13px;
      }
    }
  }
}
</style>