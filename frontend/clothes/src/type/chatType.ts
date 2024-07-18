export enum ChatType {
  ChatTitle = 'ChatTitle',
  ChatStyleCardBox = 'ChatStyleCardBox',
  ChatImg = 'ChatImg',
  ChatStyleCard = 'ChatStyleCard'
}

export interface ChatTitle {
  // 当前对话信息的类型
  type: string
  // 标题的文字内容
  title: string
}

export interface StyleProjectSingleObjectCloth {
  // 衣物类型
  type: string
  // 详细描述
  detail: string
}

export interface StyleProjectObject {
  // 穿搭方案适合的风格，如日常
  style: string
  // 穿搭方案适合的场景，如咖啡厅、逛街
  background: string[]
  // 具体的多种穿搭方案
  clothes: Array<StyleProjectSingleObjectCloth>
}

export interface ChatStyleCardBox {
  // 当前对话信息的类型
  type: string
  // 穿搭适合的性别
  gender: string
  // 具体内容
  styleProjects: Array<StyleProjectObject>
}

export interface ChatImg {
  // 当前对话信息的类型
  type: string
  // 图片的URL
  url: string
}

export interface ClothInfo {
  rankScore: number
  result: {
    maxCommission: object
    picUrl: string
    reservePrice: string
    title: string
    url: string
    zkFinalPrice: string
  }
}

export interface ClothLinks {
  // 当前对话信息的类型
  type: string
  // 所有的图片链接
  links: Array<ClothInfo>
}

// 对话信息的类型，有三种类型：ChatTitle、ChatStyleCardBox、ChatImg和ClothLinks
export type ChatMessage = ChatTitle | ChatStyleCardBox | ChatImg | ClothLinks

export interface ChatBox {
  // 对话框类型，有两种类型：box和usder
  type: string
  // 对话框里的内容
  content: Array<ChatMessage>
}

// 例子
export const ChatStyleCardBoxExample: ChatStyleCardBox = {
  type: ChatType.ChatStyleCardBox,
  // 穿搭方案适合的对象，填入男或女
  gender: '女',
  styleProjects: [
    {
      // 当前穿搭方案的风格
      style: '日常',
      // 当前穿搭方案适合的场景，例如约会、办公等
      background: ['咖啡厅', '逛街'],
      // 当前穿搭方案的具体穿搭，整体是一个数组，数组里的对象是一件衣物或一件配饰
      clothes: [
        {
          // 当前衣物或配饰的类型QQADA
          type: '上衣',
          // 当前衣物或配饰的详QQEQ细描述
          detail:
            '一件白色的短袖，其领口为圆形，左侧印有粉红色的“CAMERA PHOTO”字样和“STASHERRY”以及“SEAMLESS”图案，下摆为不规则波浪形，袖子为五分袖，整体风格简约时尚'
        },
        {
          type: '下衣',
          detail: '条浅蓝色或灰色的牛仔裤，可以选择直筒或微喇叭裤型，使整体穿搭更加休闲舒适'
        },
        {
          type: '鞋子',
          detail: '双白色帆布鞋'
        },
        {
          type: '配饰',
          detail: '佩戴一款简约的银色项链，增添时尚感'
        }
      ]
    },
    {
      // 当前穿搭方案的风格
      style: '日常',
      // 当前穿搭方案适合的场景，例如约会、办公等
      background: ['咖啡厅', '逛街'],
      // 当前穿搭方案的具体穿搭，整体是一个数组，数组里的对象是一件衣物或一件配饰
      clothes: [
        {
          // 当前衣物或配饰的类型QQADA
          type: '上衣',
          // 当前衣物或配饰的详QQEQ细描述
          detail:
            '一件白色的短袖，其领口为圆形，左侧印有粉红色的“CAMERA PHOTO”字样和“STASHERRY”以及“SEAMLESS”图案，下摆为不规则波浪形，袖子为五分袖，整体风格简约时尚'
        },
        {
          type: '下衣',
          detail: '条浅蓝色或灰色的牛仔裤，可以选择直筒或微喇叭裤型，使整体穿搭更加休闲舒适'
        },
        {
          type: '鞋子',
          detail: '双白色帆布鞋'
        },
        {
          type: '配饰',
          detail: '佩戴一款简约的银色项链，增添时尚感'
        }
      ]
    },
    {
      // 当前穿搭方案的风格
      style: '日常',
      // 当前穿搭方案适合的场景，例如约会、办公等
      background: ['咖啡厅', '逛街'],
      // 当前穿搭方案的具体穿搭，整体是一个数组，数组里的对象是一件衣物或一件配饰
      clothes: [
        {
          // 当前衣物或配饰的类型QQADA
          type: '上衣',
          // 当前衣物或配饰的详QQEQ细描述
          detail:
            '一件白色的短袖，其领口为圆形，左侧印有粉红色的“CAMERA PHOTO”字样和“STASHERRY”以及“SEAMLESS”图案，下摆为不规则波浪形，袖子为五分袖，整体风格简约时尚'
        },
        {
          type: '下衣',
          detail: '条浅蓝色或灰色的牛仔裤，可以选择直筒或微喇叭裤型，使整体穿搭更加休闲舒适'
        },
        {
          type: '鞋子',
          detail: '双白色帆布鞋'
        },
        {
          type: '配饰',
          detail: '佩戴一款简约的银色项链，增添时尚感'
        }
      ]
    }
  ]
}
