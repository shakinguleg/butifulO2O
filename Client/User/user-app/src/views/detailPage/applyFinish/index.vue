<template>
  <div class="applyFinish">
    <div class="header">支付成功</div>
    <div class="content">
      <div class="text">
        <span></span>
        <span>支付成功, 等待美体师确认</span>
      </div>
    </div>
    <div class="button_wrap">
      <div class="button" @click="() => $router.push({ name: 'beautify' })">
        返回首页
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.applyFinish {
  width: 100%;
  height: 100%;
  background-color: white;
  font-size: 14px;
  .header {
    height: 49px;
    width: 100%;
    background-color: white;
    color: #333;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0 10px;
    font-weight: bold;
    box-sizing: border-box;
    border-bottom: 1Px solid #999;
  }
  .content {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    height: 150px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .button_wrap{
      width: 100%;
      display: flex;
      justify-content: center;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      .button{
          color: white;
          padding: 10px 30px;
          background-color: rgba(22, 155, 213, 1);
          border-radius: 4px;
      }
  }
}
</style>