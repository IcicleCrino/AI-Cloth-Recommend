<template>
  <div class="warpper">
    <div class="nav">
      <div class="back" @click="toPath('/')"></div>
      <div class="nav-name">AI穿搭</div>
    </div>
    <el-scrollbar class="content">
      <template v-for="(chatBox, index) in chatArrStore.chatArr" :key="index">
        <chatBox :chat-data="chatBox"></chatBox>
      </template>
    </el-scrollbar>
    <div class="chat">
      <input type="file" @change="onFileSelected" ref="fileInput" class="input-upload" />
      <div class="chat-upload"></div>
      <el-input class="chat-input" v-model="input"></el-input>
      <el-button type="primary">发送</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import chatBox from '@/components/chatBox.vue'
import { API, token } from '../axios/API'
import axios from 'axios'
import { useChatArrStore } from '../stores/chatArr'

const router = useRouter()
const chatArrStore = useChatArrStore()

const toPath = (path: string) => {
  router.push(path)
}

const input = ref<string>('')

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
    chatArrStore.selfClothId = response.data.data.id
    // uploadedImgId.value = response.data.data.id
    console.log(chatArrStore.selfClothId)

    // 成功后调用分析API
    const analyseResponse = await axios.post(
      API.chat,
      {
        bot_id: '7392032220548104226',
        user_id: '123',
        stream: true,
        additional_messages: [
          {
            role: 'user',
            content_type: 'object_string',
            content: `[{\"type\":\"text\",\"text\":\"下面是我上传的衣物图片，请你分析图片\"},{\"type\":\"image\",\"file_id\":\"${chatArrStore.selfClothId}\"}]`
          }
        ]
      },
      {
        headers: {
          Authorization: token
        }
      }
    )
    const result = chatArrStore.extractContent(analyseResponse.data)
    console.log(result)
    chatArrStore.chatArrMessagePush(result)
  } catch (error) {
    console.error('文件上传失败:', error)
  }
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
    width: 100%;
    flex: 1;
    padding: 5px 35px;
    overflow-y: scroll;
  }
  .chat {
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;
    background-color: rgb(252, 252, 252);

    .input-upload {
      position: absolute;
      opacity: 0;
    }

    .chat-upload {
      margin-left: 15px;
      margin-right: 5px;
      width: 25px;
      height: 25px;
      background-image: url('../assets/upload.png');
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .chat-input {
      margin-right: 15px;
    }
  }
}
</style>
