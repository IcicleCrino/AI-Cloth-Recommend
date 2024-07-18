<template>
  <div class="warpper">
    <div class="nav">
      <div class="back" @click="toPath('/')"></div>
      <div class="nav-name">社区</div>
    </div>
    <div class="content">社区功能开发中...</div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const toPath = (path: string) => {
  router.push(path)
}
</script>

<style lang="scss" scoped>
.warpper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgb(210, 229, 225);

  .nav {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;

    .back {
      position: absolute;
      left: 15px;
      height: 20px;
      width: 20px;
      background-image: url('../assets/back.png');
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .nav-name {
      font-size: 14px;
      font-weight: 900;
      letter-spacing: 0px;
      line-height: 16.94px;
      color: rgba(0, 0, 0, 1);
      text-align: center;
      vertical-align: top;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 32px;
    font-weight: 400;
  }
}
</style>
