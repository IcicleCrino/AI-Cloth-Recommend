<template>
  <div class="warpper" @click="generateImg">
    <div class="style-warpper">
      <div class="style">{{ props.styleProjectObject.style }}</div>
      <div
        class="background-warpper"
        v-for="(background, index) in props.styleProjectObject.background"
        :key="index"
      >
        {{ background }}
      </div>
    </div>
    <div
      class="clothes-warpper"
      v-for="(clothes, index) in props.styleProjectObject.clothes"
      :key="index"
    >
      <div class="cloth-type">{{ clothes.type }}:</div>
      <div class="cloth-detail">{{ clothes.detail }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type StyleProjectObject } from '@/type/chatType'
import axios from 'axios'
import { API, token } from '@/axios/API'
import { useChatArrStore } from '../stores/chatArr'

const props = defineProps<{
  styleProjectObject: StyleProjectObject
}>()

const chatArrStore = useChatArrStore()

const generateImg = async () => {
  let projectObjectStr = JSON.stringify(props.styleProjectObject)
  projectObjectStr = projectObjectStr.replace(/["\\n]/g, '')
  console.log(projectObjectStr)
  // 成功后调用分析API
  try {
    const analyseResponse = await axios.post(
      API.chat,
      {
        bot_id: '7392044469736521769',
        user_id: '123',
        stream: true,
        additional_messages: [
          {
            role: 'user',
            content_type: 'object_string',
            content: `[{\"type\":\"text\",\"text\":\"请你按照以下的穿搭，生成对应的图片：${projectObjectStr}\"},{\"type\":\"image\",\"file_id\":\"${chatArrStore.selfShotId}\"},{\"type\":\"image\",\"file_id\":\"${chatArrStore.selfClothId}\"}]`
          }
        ]
      },
      {
        headers: {
          Authorization: token
        }
      }
    )
    console.log(analyseResponse.data)
    const imgUrl = chatArrStore.extractImgUrl(analyseResponse.data)
    console.log(imgUrl)
    chatArrStore.chatArrMessagePush({
      type: 'ChatImg',
      url: imgUrl
    })
  } catch (error) {
    console.error('文件上传失败:', error)
  }
}
</script>

<style lang="scss" scoped>
.warpper {
  margin: 10px 0px;
  padding: 10px 0px;
  opacity: 1;
  border-radius: 10px;
  background: rgba(252, 252, 252, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .style-warpper {
    display: flex;
    padding: 10px 10px;

    opacity: 1;
    /** 文本1 */
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 12.1px;
    color: rgba(0, 0, 0, 1);
    vertical-align: top;
    .style {
      margin-right: 5px;
    }

    .background-warpper {
      margin-right: 5px;
    }
  }

  .clothes-warpper {
    padding: 5px 10px;
    opacity: 1;
    /** 文本1 */
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 12.1px;
    color: rgba(0, 0, 0, 1);
    vertical-align: top;
  }
}
</style>
