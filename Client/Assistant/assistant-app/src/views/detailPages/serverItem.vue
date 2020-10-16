<template>
  <div>
    <all-header :doSomething='test'>
      <template v-slot:type>服务项目</template>
      <template v-slot:option >新增</template>
    </all-header>
    <div class="content"></div>
  </div>
</template>

<script>
import header from "../../components/header";
export default {
  components: {
    [header.name]: header,
  },
  methods: {
    test() {
      console.log("111");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>