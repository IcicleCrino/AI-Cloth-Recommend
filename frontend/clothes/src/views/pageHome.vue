<template>
  <div class="warpper">
    <div class="content">
      <div class="content-me-warpper">
        <div class="content-me-img"></div>
        <div class="content-me-text">me</div>
        <input type="file" @change="onFileSelected" ref="fileInput" class="input-upload" />
      </div>
      <div class="content-img"></div>
    </div>
    <div class="nav">
      <div class="closet-warpper" @click="toPath('/closet')">
        <div class="closet-img"></div>
        <div class="closet-text">closet</div>
      </div>
      <div class="chat-warpper" @click="toPath('/chat')">
        <div class="chat-img"></div>
        <div class="chat-text">chat</div>
      </div>
      <div class="community-warpper" @click="toPath('/community')">
        <div class="community-img"></div>
        <div class="community-text">community</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useChatArrStore } from '../stores/chatArr'
import axios from 'axios'
import { API, token } from '@/axios/API'

const router = useRouter()
const chatArrStore = useChatArrStore()
const toPath = (path: string) => {
  router.push(path)
}

const onFileSelected = async (event: Event) => {
  const target = event.target as HTMLInputElement
  if (!target.files || target.files.length === 0) return

  const file = target.files[0]
  const formData = new FormData()
  formData.append('file', file)

  try {
    const response = await axios.post(API.uploadImg, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
      }
    })

    console.log('文件上传成功:', response.data)
    chatArrStore.selfShotId = response.data.data.id
    console.log(chatArrStore.selfShotId)
  } catch (error) {
    console.error('文件上传失败:', error)
  }
}
</script>

<style lang="scss" scoped>
.input-upload {
  position: relative;
  top: -35px;
  opacity: 0;
}

.warpper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100vw;
  height: 100vh;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80vh;

    .content-me-warpper {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 35px;
      height: 40px;

      .content-me-img {
        position: relative;
        left: -4px;
        width: 100%;
        height: 35px;
        background-image: url('../assets/me.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }

      .content-me-text {
        font-size: 6px;
        font-weight: 600;
        letter-spacing: 0px;
        line-height: 7.26px;
        color: rgba(0, 0, 0, 1);
        text-align: center;
        vertical-align: top;
      }
    }

    .content-img {
      position: relative;
      top: 50px;
      width: 380px;
      height: 290px;
      background-image: url('../assets/homeLogo.png');
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  .nav {
    width: 100%;
    height: 90px;
    padding: 0px 70px;
    display: flex;
    justify-content: space-between;

    > * {
      display: flex;
      flex-direction: column;
      width: 45px;
      height: 100%;
    }

    .closet-warpper {
      .closet-img {
        width: 45px;
        height: 45px;
        margin-bottom: 20px;
        background-image: url('../assets/closet.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }

      .closet-text {
        font-size: 8px;
        font-weight: 600;
        letter-spacing: 0px;
        line-height: 9.68px;
        color: rgba(0, 0, 0, 1);
        text-align: center;
        vertical-align: top;
      }
    }

    .chat-warpper {
      .chat-img {
        width: 45px;
        height: 45px;
        margin-bottom: 20px;
        background-image: url('../assets/chat.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }

      .chat-text {
        font-size: 8px;
        font-weight: 600;
        letter-spacing: 0px;
        line-height: 9.68px;
        color: rgba(0, 0, 0, 1);
        text-align: center;
        vertical-align: top;
      }
    }

    .community-warpper {
      .community-img {
        width: 45px;
        height: 45px;
        margin-bottom: 20px;
        background-image: url('../assets/community.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }

      .community-text {
        font-size: 8px;
        font-weight: 600;
        letter-spacing: 0px;
        line-height: 9.68px;
        color: rgba(0, 0, 0, 1);
        text-align: center;
        vertical-align: top;
      }
    }
  }
}
</style>
