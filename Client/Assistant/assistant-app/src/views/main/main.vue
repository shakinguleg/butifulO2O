<template>
  <div class="main">
    <router-view></router-view>
    <all-bottom v-model="index"></all-bottom>
  </div>
</template>

<script>
import bottom from "./components/bottom";

export default {
  data() {
    return {
      index: 0,
    };
  },
  components: {
    [bottom.name]: bottom,
  },
};
</script>

<style lang="scss" scoped>
.main {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>