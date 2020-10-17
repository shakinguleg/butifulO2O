<template>
  <div class="bottom">
    <div
      class="block"
      v-for="(item, index) in list"
      :key="index"
      @click="post(index)"
    >
      <div class="photo"></div>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "all-bottom",
  props: {
    value: 0,
  },
  data() {
    return {
      list: [
        { title: "美吧", name: "beautify" },
        { title: "订单", name: "order" },
        { title: "发现", name: "find" },
        { title: "我的", name: "mine" },
      ],
    };
  },
  methods: {
    post(index) {
      this.$emit("input", index);
      this.$router.push({ name: this.list[index].name });
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  width: 100%;
  height: 49px;
  background-color: aqua;
  display: flex;
  justify-content: space-around;
  .block {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .photo {
      width: 24px;
      height: 24px;
      background-color: red;
      margin-bottom: 2px;
    }
    span {
      font-size: 12px;
    }
  }
}
</style>