import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type ChatBox, ChatType, type ChatMessage } from '@/type/chatType'

export const useChatArrStore = defineStore(
  'chatArr',
  () => {
    const chatIndex = ref<number>(0)
    const chatArr = reactive<Array<ChatBox>>([
      {
        type: 'bot',
        content: [
          {
            type: ChatType.ChatTitle,
            title: '你好! 我是你的私人穿搭猫猫，请给我衣物图片，我帮你生成穿搭方案~'
          }
        ]
      }
    ])
    const chatArrMessagePush = (obj: object): void => {
      chatArr[chatIndex.value].content.push(obj as ChatMessage)
    }
    const chatArrDialogPush = (dialog: object) => {
      chatIndex.value++
      chatArr.push(dialog as ChatBox)
    }
    const selfShotId = ref<string>('')
    const selfClothId = ref<string>('')
    //从穿搭分析的流式输出里切出对象
    const extractContent = (rawEvents: string) => {
      // 将原始文本按事件分割成数组
      const events = rawEvents.split('event:')

      // 存储提取到的result对象
      let result = {}

      // 遍历事件数组
      events.forEach((event) => {
        // 检查事件是否是我们要找的类型
        if (event.startsWith('conversation.message.completed')) {
          // 进一步分割数据部分
          const eventData = event.split('data:')[1]

          // 尝试解析JSON字符串
          try {
            // 找到工作流返回的内容
            if (eventData.includes('tool_response')) {
              let dataObj = eventData.split('"content":"')[1]
              dataObj = dataObj.split('","content_type"')[0]
              dataObj = dataObj.replace(/[' '\\n]/g, '')
              dataObj = dataObj.replace(/\\"/g, '"')
              // result = eval('(' + dataObj + ')')
              console.log(dataObj)
              result = JSON.parse(dataObj)
              return result
            }
          } catch (e) {
            console.error('Error parsing JSON:', e)
          }
        }
        return result
      })

      // 输出匹配到的内容`
      return result
    }
    // 从效果图的流式输出里切出图片URL
    const extractImgUrl = (rawEvents: string) => {
      // 将原始文本按事件分割成数组
      const events = rawEvents.split('event:')

      // 存储提取到的URL
      let imgUrl = ''

      // 遍历事件数组
      events.forEach((event) => {
        // 检查事件是否是我们要找的类型
        if (event.startsWith('conversation.message.completed')) {
          // 进一步分割数据部分
          let eventData = event.split('data:')[1]

          // 尝试解析JSON字符串
          try {
            // 找到工作流返回的内容
            if (eventData.includes('https') && eventData.includes('tool_response')) {
              console.log(eventData)
              // 去除转义符号
              eventData = eventData.replace(/\\"/g, '"')
              imgUrl = eventData.split(/"type":"tool_response","content":"{"output":"/)[1]
              console.log(imgUrl)
              imgUrl = imgUrl.split(/"}","content_type":"text"/)[0]
              console.log(imgUrl)
              return imgUrl
            }
          } catch (e) {
            console.error('Error parsing JSON:', e)
          }
        }
        return imgUrl
      })

      // 输出匹配到的内容`
      return imgUrl
    }

    return {
      chatArr,
      chatArrMessagePush,
      chatArrDialogPush,
      selfShotId,
      selfClothId,
      extractContent,
      extractImgUrl
    }
  },
  {
    persist: true
  }
)
