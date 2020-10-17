<template>
  <div class="enter">
    <all-header :path="{}"></all-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "../../components/header";

export default {
  components: {
    [header.name]: header,
  },
};
</script>

<style lang="scss" scoped>
.enter {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
  }
}
</style>