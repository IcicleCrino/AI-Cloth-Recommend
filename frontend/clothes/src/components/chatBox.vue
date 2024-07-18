<template>
  <div class="chatBox-warpper">
    <template v-for="(chatMessage, index) in props.chatData.content" :key="index">
      <chatMessage :chat-message="chatMessage"></chatMessage>
    </template>
  </div>
</template>

<script lang="ts" setup>
import chatMessage from './chatMessage.vue'
import { type ChatBox } from '@/type/chatType'

const props = defineProps<{
  chatData: ChatBox
}>()
</script>

<style lang="scss" scoped>
.chatBox-warpper {
  margin-bottom: 10px;
}
</style>
