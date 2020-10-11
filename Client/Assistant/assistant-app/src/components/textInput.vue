<template>
  <div>
    <input class="textInput" v-model="text" />
  </div>
</template>

<script>
export default {
  name: "textInput",
  props: {
    value: "",
  },
  data() {
    return {
      text: "",
    };
  },
  watch: {
    text: {
      handler(newVal) {
        this.$emit("input", newVal);
      },
    },
    value: {
      handler(newVal) {
        this.text = newVal;
      },
    },
  },
};
</script>

<style lang='scss' scoped>
.textInput {
  width: 100%;
  height: 100%;
  text-align: center;
  border: none;
  border-bottom: 1Px solid #aaaaaa;
  &:focus {
    outline: none;
    box-shadow: none;
  }
}
</style>