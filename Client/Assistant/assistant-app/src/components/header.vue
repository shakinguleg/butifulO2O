<template>
  <div class="header">
    <div class="left_wrap">
      <div class="iconfont icon-right1" @click="$router.back()"></div>
      <slot name="type"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "all-header",
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 49px;
  background-color: white;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid #eee;
  width: 100%;
  .left_wrap {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 20px;
    .icon-right1 {
      font-size: 16px;
      margin-right: 10px;
    }
  }
}
</style>