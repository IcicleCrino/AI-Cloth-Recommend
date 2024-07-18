<template>
  <div class="warpper">
    <div class="nav">
      <div class="back" @click="toPath('/')"></div>
      <div class="nav-name">我的衣橱</div>
    </div>
    <div class="rank-warpper">
      <div class="all">全部</div>
      <div class="rank">评分</div>
      <div class="style">风格</div>
      <div class="personlize">自定义</div>
    </div>
    <el-scrollbar class="content">
      <div class="projects-warpper">
        <div class="project" v-for="(project, index) in projects" :key="index"></div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const toPath = (path: string) => {
  router.push(path)
}

const projects = [
  {
    img: 'https://obsidain-img-1304002674.cos.ap-guangzhou.myqcloud.com/202407180147291.png'
  },
  {
    img: 'https://obsidain-img-1304002674.cos.ap-guangzhou.myqcloud.com/202407180147291.png'
  },
  {
    img: 'https://obsidain-img-1304002674.cos.ap-guangzhou.myqcloud.com/202407180147291.png'
  },
  {
    img: 'https://obsidain-img-1304002674.cos.ap-guangzhou.myqcloud.com/202407180147291.png'
  },
  {
    img: 'https://obsidain-img-1304002674.cos.ap-guangzhou.myqcloud.com/202407180147291.png'
  },
  {
    img: 'https://obsidain-img-1304002674.cos.ap-guangzhou.myqcloud.com/202407180147291.png'
  },
  {
    img: 'https://obsidain-img-1304002674.cos.ap-guangzhou.myqcloud.com/202407180147291.png'
  },
  {
    img: 'https://obsidain-img-1304002674.cos.ap-guangzhou.myqcloud.com/202407180147291.png'
  },
  {
    img: 'https://obsidain-img-1304002674.cos.ap-guangzhou.myqcloud.com/202407180147291.png'
  },
  {
    img: 'https://obsidain-img-1304002674.cos.ap-guangzhou.myqcloud.com/202407180147291.png'
  },
  {
    img: 'https://obsidain-img-1304002674.cos.ap-guangzhou.myqcloud.com/202407180147291.png'
  },
  {
    img: 'https://obsidain-img-1304002674.cos.ap-guangzhou.myqcloud.com/202407180147291.png'
  }
]
</script>

<style lang="scss" scoped>
.warpper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  padding: 0 20px;

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

  .rank-warpper {
    display: flex;
    width: 100%;
    height: 25px;
    margin: 10px 0px;

    > * {
      margin-right: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 25px;

      font-size: 12px;
      font-weight: 900;
      letter-spacing: 0px;
      line-height: 14.52px;
      color: rgba(0, 0, 0, 1);
      vertical-align: top;
    }

    .all {
      opacity: 1;
      border-radius: 7px;
      background: rgba(58, 58, 58, 1);
      box-shadow: 0px 2px 2pxrgba (0, 0, 0, 0.25);
      color: #fff;
    }
  }
  .content {
    width: 100%;
    height: 100%;

    .projects-warpper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;

      .project {
        margin: 5px 0px;
        width: 90px;
        height: 160px;
        border-radius: 10px;
        background-image: url('../assets/model.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
