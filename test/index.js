const text = `event:conversation.chat.created
data:{"id":"7392939480203919375","conversation_id":"7392939480203902991","bot_id":"7392032220548104226","created_at":1721302863,"last_error":{"code":0,"msg":""},"status":"created","usage":{"token_count":0,"output_count":0,"input_count":0}}

event:conversation.chat.in_progress
data:{"id":"7392939480203919375","conversation_id":"7392939480203902991","bot_id":"7392032220548104226","created_at":1721302863,"last_error":{"code":0,"msg":""},"status":"in_progress","usage":{"token_count":0,"output_count":0,"input_count":0}}

event:conversation.message.completed
data:{"id":"7392939493776605184","conversation_id":"7392939480203902991","bot_id":"7392032220548104226","role":"assistant","type":"function_call","content":"{\"name\":\"ts-cloth_anaylse-cloth_anaylse\",\"arguments\":{\"cloth_img\":\"7392939067559968822\"},\"plugin_id\":7392044322331361332,\"plugin_name\":\"cloth_anaylse\",\"api_id\":7392044322331377716,\"api_name\":\"cloth_anaylse\",\"plugin_type\":4,\"thought\":\"需求为分析衣物（id：7392939067559968822），并返回穿搭方案，需要调用ts-cloth_anaylse-cloth_anaylse工具进行查询\"}","content_type":"text","chat_id":"7392939480203919375"}

event:conversation.message.completed
data:{"id":"7392939575141908520","conversation_id":"7392939480203902991","bot_id":"7392032220548104226","role":"assistant","type":"tool_response","content":"{\"gender\":\"女\",\"project\":[{\"background\":[\"咖啡厅\",\"逛街\"],\"clothes\":[{\"detail\":\"一件白色的短袖，其领口为圆形，左侧印有粉红色的“CAMERA PHOTO”字样和“STASHERRY”以及“SEAMLESS”图案，下摆为不规则波浪形，袖子为五分袖，整体风格简约时尚\",\"type\":\"上衣\"},{\"detail\":\"条浅蓝色或灰色的牛仔裤，可以选择直筒或微喇叭裤型，使整体穿搭更加休闲舒适\",\"type\":\"下衣\"},{\"detail\":\"双白色帆布鞋\",\"type\":\"鞋子\"},{\"detail\":\"佩戴一款简约的银色项链，增添时尚感\",\"type\":\"配饰\"}],\"style\":\"日常\"},{\"background\":[\"办公室\",\"商务会议\"],\"clothes\":[{\"detail\":\"一件白色的短袖，其领口为圆形，左侧印有粉红色的“CAMERA PHOTO”字样和“STASHERRY”以及“SEAMLESS”图案，下摆为不规则波浪形，袖子为五分袖，整体风格简约时尚\",\"type\":\"上衣\"},{\"detail\":\"一条黑色的直筒西裤，裤型笔直，适合正式场合，颜色和上衣形成对比\",\"type\":\"下衣\"},{\"detail\":\"双黑色高跟鞋，提升整体气质\",\"type\":\"鞋子\"},{\"detail\":\"佩戴一款小巧的金色耳环，与黑色西裤形成色彩上的平衡\",\"type\":\"配饰\"}],\"style\":\"正式\"},{\"background\":[\"户外活动\",\"朋友聚会\"],\"clothes\":[{\"detail\":\"一件白色的短袖，其领口为圆形，左侧印有粉红色的“CAMERA PHOTO”字样和“STASHERRY”以及“SEAMLESS”图案，下摆为不规则波浪形，袖子为五分袖，整体风格简约时尚\",\"type\":\"上衣\"},{\"detail\":\"一条宽松的运动裤，以舒适为主，颜色可以选择白色或浅色系，与上衣搭配自然\",\"type\":\"下衣\"},{\"detail\":\"双运动鞋，颜色可以与运动裤相呼应\",\"type\":\"鞋子\"},{\"detail\":\"佩戴一款休闲风格的手链，增添轻松愉悦的氛围\",\"type\":\"配饰\"}],\"style\":\"休闲\"}]}","content_type":"text","chat_id":"7392939480203919375"}

event:conversation.message.delta
data:{"id":"7392939493776588800","conversation_id":"7392939480203902991","bot_id":"7392032220548104226","role":"assistant","type":"answer","content":"{\"gender\":\"女\",\"project\":[{\"background\":[\"咖啡厅\",\"逛街\"],\"clothes\":[{\"detail\":\"一件白色的短袖，其领口为圆形，左侧印有粉红色的“CAMERA PHOTO”字样和“STASHERRY”以及“SEAMLESS”图案，下摆为不规则波浪形，袖子为五分袖，整体风格简约时尚\",\"type\":\"上衣\"},{\"detail\":\"条浅蓝色或灰色的牛仔裤，可以选择直筒或微喇叭裤型，使整体穿搭更加休闲舒适\",\"type\":\"下衣\"},{\"detail\":\"双白色帆布鞋\",\"type\":\"鞋子\"},{\"detail\":\"佩戴一款简约的银色项链，增添时尚感\",\"type\":\"配饰\"}],\"style\":\"日常\"},{\"background\":[\"办公室\",\"商务会议\"],\"clothes\":[{\"detail\":\"一件白色的短袖，其领口为圆形，左侧印有粉红色的“CAMERA PHOTO”字样和“STASHERRY”以及“SEAMLESS”图案，下摆为不规则波浪形，袖子为五分袖，整体风格简约时尚\",\"type\":\"上衣\"},{\"detail\":\"一条黑色的直筒西裤，裤型笔直，适合正式场合，颜色和上衣形成对比\",\"type\":\"下衣\"},{\"detail\":\"双黑色高跟鞋，提升整体气质\",\"type\":\"鞋子\"},{\"detail\":\"佩戴一款小巧的金色耳环，与黑色西裤形成色彩上的平衡\",\"type\":\"配饰\"}],\"style\":\"正式\"},{\"background\":[\"户外活动\",\"朋友聚会\"],\"clothes\":[{\"detail\":\"一件白色的短袖，其领口为圆形，左侧印有粉红色的“CAMERA PHOTO”字样和“STASHERRY”以及“SEAMLESS”图案，下摆为不规则波浪形，袖子为五分袖，整体风格简约时尚\",\"type\":\"上衣\"},{\"detail\":\"一条宽松的运动裤，以舒适为主，颜色可以选择白色或浅色系，与上衣搭配自然\",\"type\":\"下衣\"},{\"detail\":\"双运动鞋，颜色可以与运动裤相呼应\",\"type\":\"鞋子\"},{\"detail\":\"佩戴一款休闲风格的手链，增添轻松愉悦的氛围\",\"type\":\"配饰\"}],\"style\":\"休闲\"}]}","content_type":"text","chat_id":"7392939480203919375"}

event:conversation.message.completed
data:{"id":"7392939493776588800","conversation_id":"7392939480203902991","bot_id":"7392032220548104226","role":"assistant","type":"answer","content":"{\"gender\":\"女\",\"project\":[{\"background\":[\"咖啡厅\",\"逛街\"],\"clothes\":[{\"detail\":\"一件白色的短袖，其领口为圆形，左侧印有粉红色的“CAMERA PHOTO”字样和“STASHERRY”以及“SEAMLESS”图案，下摆为不规则波浪形，袖子为五分袖，整体风格简约时尚\",\"type\":\"上衣\"},{\"detail\":\"条浅蓝色或灰色的牛仔裤，可以选择直筒或微喇叭裤型，使整体穿搭更加休闲舒适\",\"type\":\"下衣\"},{\"detail\":\"双白色帆布鞋\",\"type\":\"鞋子\"},{\"detail\":\"佩戴一款简约的银色项链，增添时尚感\",\"type\":\"配饰\"}],\"style\":\"日常\"},{\"background\":[\"办公室\",\"商务会议\"],\"clothes\":[{\"detail\":\"一件白色的短袖，其领口为圆形，左侧印有粉红色的“CAMERA PHOTO”字样和“STASHERRY”以及“SEAMLESS”图案，下摆为不规则波浪形，袖子为五分袖，整体风格简约时尚\",\"type\":\"上衣\"},{\"detail\":\"一条黑色的直筒西裤，裤型笔直，适合正式场合，颜色和上衣形成对比\",\"type\":\"下衣\"},{\"detail\":\"双黑色高跟鞋，提升整体气质\",\"type\":\"鞋子\"},{\"detail\":\"佩戴一款小巧的金色耳环，与黑色西裤形成色彩上的平衡\",\"type\":\"配饰\"}],\"style\":\"正式\"},{\"background\":[\"户外活动\",\"朋友聚会\"],\"clothes\":[{\"detail\":\"一件白色的短袖，其领口为圆形，左侧印有粉红色的“CAMERA PHOTO”字样和“STASHERRY”以及“SEAMLESS”图案，下摆为不规则波浪形，袖子为五分袖，整体风格简约时尚\",\"type\":\"上衣\"},{\"detail\":\"一条宽松的运动裤，以舒适为主，颜色可以选择白色或浅色系，与上衣搭配自然\",\"type\":\"下衣\"},{\"detail\":\"双运动鞋，颜色可以与运动裤相呼应\",\"type\":\"鞋子\"},{\"detail\":\"佩戴一款休闲风格的手链，增添轻松愉悦的氛围\",\"type\":\"配饰\"}],\"style\":\"休闲\"}]}","content_type":"text","chat_id":"7392939480203919375"}

event:conversation.message.completed
data:{"id":"7392939575141990440","conversation_id":"7392939480203902991","bot_id":"7392032220548104226","role":"assistant","type":"verbose","content":"{\"msg_type\":\"generate_answer_finish\",\"data\":\"{\\\"finish_reason\\\":0}\",\"from_module\":null,\"from_unit\":null}","content_type":"text","chat_id":"7392939480203919375"}

event:conversation.chat.completed
data:{"id":"7392939480203919375","conversation_id":"7392939480203902991","bot_id":"7392032220548104226","created_at":1721302863,"completed_at":1721302883,"last_error":{"code":0,"msg":""},"status":"completed","usage":{"token_count":92,"output_count":42,"input_count":50}}

event:done
data:"[DONE]"`;

const extractContent = (rawEvents) => {
    // 将原始文本按事件分割成数组
    const events = rawEvents.split("event:");

    // 存储提取到的result对象
    let result = {};

    // 遍历事件数组
    events.forEach((event) => {
        // 检查事件是否是我们要找的类型
        if (event.startsWith("conversation.message.completed")) {
            // 进一步分割数据部分
            const eventData = event.split("data:")[1];

            // 尝试解析JSON字符串
            try {
                // 找到工作流返回的内容
                if (eventData.includes("tool_response")) {
                    let dataObj = eventData.split('"content":"')[1];
                    dataObj = dataObj.split('","content_type"')[0];
                    result = eval("(" + dataObj + ")");
                    console.log(result);
                    return result;
                }
            } catch (e) {
                console.error("Error parsing JSON:", e);
            }
        }
    });

    // 输出匹配到的内容`
    return result;
};

// const result = extractContent(text);
// console.log(typeof result);

const ImgText = `event:conversation.chat.created
data:{"id":"7392994051383083035","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","created_at":1721315567,"last_error":{"code":0,"msg":""},"status":"created","usage":{"token_count":0,"output_count":0,"input_count":0}}

event:conversation.chat.in_progress
data:{"id":"7392994051383083035","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","created_at":1721315567,"last_error":{"code":0,"msg":""},"status":"in_progress","usage":{"token_count":0,"output_count":0,"input_count":0}}

event:conversation.message.completed
data:{"id":"7392994091564302362","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"function_call","content":"{\"name\":\"ts-generate_personal_cloth-generate_personal_cloth\",\"arguments\":{\"cloth_image\":\"https://lf6-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/95005762403555/image/png/7392991728959094796/202407131304557.png?lk3s=50ccb0c5\\u0026x-expires=1721401967\\u0026x-signature=emh7eRM5zZz%2F6Sin3XyxZ1Bi%2BDg%3D\",\"self_shot\":\"https://lf3-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/95005762403555/image/jpeg/7392991713176256563/%E8%87%AA%E6%8B%8D1.jpg?lk3s=50ccb0c5\\u0026x-expires=1721401967\\u0026x-signature=Aza4STg1EKEL1PbOCrPCW2HmqpI%3D\",\"style_descption\":\"在公园或郊游时，穿着一件白色的短袖，其领口为圆形，左侧印有粉红色的“CAMERAPHOTO”字样和“STASHERRY”以及“SEAMLESS”图案，下摆为不规则波浪形，袖子为五分袖，搭配一条宽松的棉麻短裤，色彩可以选择柔和的大地色，如卡其色或米色，适合休闲户外活动。脚穿一双白色运动鞋，舒适的同时增添活力。佩戴一款编织手环，增添自然元素，适合户外休闲风格。\"},\"plugin_id\":7390970817351434290,\"plugin_name\":\"generate_personal_cloth\",\"api_id\":7390970817351450674,\"api_name\":\"generate_personal_cloth\",\"plugin_type\":5,\"thought\":\"需求为根据自拍照、上传的衣物图片和穿搭描述，生成个人穿搭全身图，需要调用ts-generate_personal_cloth-generate_personal_cloth工具进行生成\"}","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.completed
data:{"id":"7392994275337961498","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"tool_response","content":"{\"output\":\"https://lf-bot-studio-plugin-resource.coze.cn/obj/bot-studio-platform-plugin-tos/artist/image/236415a901fd4bbf9d73849d64a91e3f.png\"}","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"为","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"你","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"生成","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"的","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"图片","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"如下","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"：","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"![","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"图片","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"](","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"https","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"://","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"lf","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"-b","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"ot","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"-st","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"udio","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"-plugin","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"-res","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"ource","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":".co","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"ze","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":".cn","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"/","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"obj","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"/b","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"ot","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"-st","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"udio","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"-platform","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"-plugin","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"-t","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"os","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"/","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"artist","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"/image","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"/","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"2","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"3","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"6","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"4","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"1","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"5","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"a","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"9","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"0","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"1","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"fd","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"4","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"bb","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"f","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"9","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"d","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"7","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"3","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"8","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"4","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"9","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"d","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"6","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"4","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"a","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"9","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"1","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"e","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"3","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"f","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":".png","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.delta
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":")","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.completed
data:{"id":"7392994091564269594","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"answer","content":"为你生成的图片如下：![图片](https://lf-bot-studio-plugin-resource.coze.cn/obj/bot-studio-platform-plugin-tos/artist/image/236415a901fd4bbf9d73849d64a91e3f.png)","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.completed
data:{"id":"7392994282090643465","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"verbose","content":"{\"msg_type\":\"generate_answer_finish\",\"data\":\"{\\\"finish_reason\\\":0}\",\"from_module\":null,\"from_unit\":null}","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.completed
data:{"id":"7392994282090659849","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"follow_up","content":"在生成的图片中添加一些颜色搭配建议","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.completed
data:{"id":"7392994282090676233","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"follow_up","content":"推荐一些适合公园郊游的棉麻短裤","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.message.completed
data:{"id":"7392994282090692617","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","role":"assistant","type":"follow_up","content":"如何判断一件衣服的版型是否合身？","content_type":"text","chat_id":"7392994051383083035"}

event:conversation.chat.completed
data:{"id":"7392994051383083035","conversation_id":"7392994051383066651","bot_id":"7392044469736521769","created_at":1721315567,"completed_at":1721315622,"last_error":{"code":0,"msg":""},"status":"completed","usage":{"token_count":2158,"output_count":530,"input_count":1628}}

event:done
data:"[DONE]"
`;

// 从效果图的流式输出里切出图片URL
const extractImgUrl = (rawEvents) => {
    // 将原始文本按事件分割成数组
    const events = rawEvents.split("event:");

    // 存储提取到的URL
    let imgUrl = "";

    // 遍历事件数组
    events.forEach((event) => {
        // 检查事件是否是我们要找的类型
        if (event.startsWith("conversation.message.completed")) {
            // 进一步分割数据部分
            const eventData = event.split("data:")[1];

            // 尝试解析JSON字符串
            try {
                // 找到工作流返回的内容
                if (
                    eventData.includes("https") &&
                    eventData.includes("tool_response")
                ) {
                    imgUrl = eventData.split(
                        /"type":"tool_response","content":"{"output":"/
                    )[1];
                    imgUrl = imgUrl.split(/"}","content_type":"text"/)[0];
                    console.log(imgUrl);
                    return imgUrl;
                }
            } catch (e) {
                console.error("Error parsing JSON:", e);
            }
        }
        return imgUrl;
    });

    // 输出匹配到的内容`
    return imgUrl;
};

// extractImgUrl(ImgText);

// console.log(eventData);

let eventData = `{"id":"7393008727126704155","conversation_id":"7393008560399106058","bot_id":"7392044469736521769","role":"assistant","type":"tool_response","content":"{\"output\":\"https://lf-bot-studio-plugin-resource.coze.cn/obj/bot-studio-platform-plugin-tos/artist/image/645f223c7a414b2c9404638ee3788ac2.png\"}","content_type":"text","chat_id":"7393008560399122442"}`;
eventData = eventData.replace(/\\"/g, '"');

let imgUrl = eventData.split(
    /"type":"tool_response","content":"{"output":"/
)[1];
console.log(imgUrl);
imgUrl = imgUrl.split(/"}","content_type":"text"/)[0];
console.log(imgUrl);
