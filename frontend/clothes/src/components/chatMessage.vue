<template>
  <div class="chatTitle" v-if="props.chatMessage.type === 'ChatTitle'">
    <div class="chatTitle-icon"></div>
    <div class="chatTitle-text">{{ (props.chatMessage as ChatTitle).title }}</div>
  </div>

  <div class="chatStyleCardBox" v-if="props.chatMessage.type === 'ChatStyleCardBox'">
    <template
      v-for="(styleProjectObject, index) in (props.chatMessage as ChatStyleCardBox).styleProjects"
      :key="index"
    >
      <chatStyleCard :style-project-object="styleProjectObject"></chatStyleCard>
    </template>
  </div>

  <div class="chatImg" v-if="props.chatMessage.type === 'ChatImg'">
    <img
      class="img"
      :src="(props.chatMessage as ChatImg).url"
      @click="searchImg((props.chatMessage as ChatImg).url)"
    />
    <div class="choose-warpper">
      <div class="like-warpper">
        <div class="like-icon" @click="likeImg"></div>
      </div>
      <div class="reload-warpper">
        <div class="reload-icon"></div>
      </div>
    </div>
  </div>

  <div class="chatCloth-links" v-if="props.chatMessage.type === 'ClothLinks'">
    <div class="clothLinks-warpper">
      <template v-for="(clothInfo, index) in (props.chatMessage as ClothLinks).links" :key="index">
        <img
          @click="jumpTo(clothInfo.result.url)"
          class="clothImg"
          :src="clothInfo.result.picUrl"
          :alt="clothInfo.result.title"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import chatStyleCard from '../components/chatStyleCard.vue'
import {
  type ChatTitle,
  type ChatStyleCardBox,
  type ChatImg,
  type ChatMessage,
  type ClothLinks,
  ChatType
} from '../type/chatType'
import { useChatArrStore } from '../stores/chatArr'
import axios from 'axios'
import { API } from '@/axios/API'

const chatArrStore = useChatArrStore()

const props = defineProps<{
  chatMessage: ChatMessage
}>()

const likeImg = () => {
  console.log('我喜欢这套穿搭~')
}

const searchImg = async (imgUrl: string) => {
  const links = await axios.post(API.searchImg, { imgUrl })
  console.log(links.data)

  chatArrStore.chatArrMessagePush({
    type: ChatType.ChatTitle,
    title: '下面是为您找到的相似衣物~'
  })
  chatArrStore.chatArrMessagePush({
    type: 'ClothLinks',
    links: links.data
  })
}

const jumpTo = (url: string) => {
  window.open(url)
}
</script>

<style lang="scss" scoped>
.chatTitle {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;

  .chatTitle-icon {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #fff;
    background-image: url('../assets/me.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .chatTitle-text {
    padding: 0px 10px;
    flex: 1;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 12.1px;
    color: rgba(0, 0, 0, 1);
    vertical-align: top;
  }
}

.chatImg {
  width: 125px;

  .img {
    margin: 5px 0px;
    width: 125Fpx;
    height: 220px;
    opacity: 1;
    border-radius: 10px;
    background-image: url('../assets/model.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .choose-warpper {
    display: flex;
    width: 100%;
    margin-bottom: 10px;

    .like-warpper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 5px;
      width: 30px;
      height: 25px;
      border-radius: 3px;
      background-color: #fff;

      .like-icon {
        width: 25px;
        height: 25px;
        background-image: url('../assets/like.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }

    .reload-warpper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 25px;
      border-radius: 3px;
      background-color: #fff;

      .reload-icon {
        width: 20px;
        height: 20px;
        background-image: url('../assets/reload.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }

  .chatCloth-links {
    .clothLinks-warpper {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow-x: scroll;
      width: 100%;
      height: 40px;
    }
  }
}

.clothImg {
  width: auto;
  height: 90px;
  object-fit: cover;
  margin: 3px 5px;
  border-radius: 8px;
}
</style>
