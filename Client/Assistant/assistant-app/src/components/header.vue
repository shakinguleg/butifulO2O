<template>
  <div class="header">
    <div class="left_wrap">
      <div class="iconfont icon-right1" @click="$router.back()"></div>
      <slot name="type"></slot>
    </div>
    <div class="right_wrap" @click="doSomething" v-if="doSomething">
      <slot name="option"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "all-header",
  props: {
    doSomething: Function,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 49px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  .left_wrap {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    .icon-right1 {
      font-size: 16px;
      margin-right: 10px;
    }
  }
  .right_wrap {
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 14px;
  }
}
</style>