// This file is auto-generated, don't edit it
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import ImageSearch20210501, * as $ImageSearch20210501 from '@alicloud/imagesearch20210501';
import * as $OpenApi from '@alicloud/openapi-client';
import * as $Util from '@alicloud/tea-util';

export default class Client {
  /**
   * 使用AK&SK初始化账号Client
   * @return Client
   * @throws Exception
   */
  static createClient(): ImageSearch20210501 {
    // 工程代码泄露可能会导致 AccessKey 泄露，并威胁账号下所有资源的安全性。以下代码示例仅供参考。
    // 建议使用更安全的 STS 方式，更多鉴权访问方式请参见：https://help.aliyun.com/document_detail/378664.html。
    const config = new $OpenApi.Config({
      // 必填，请确保代码运行环境设置了环境变量 ALIBABA_CLOUD_ACCESS_KEY_ID。
      //   accessKeyId: process.env['ALIBABA_CLOUD_ACCESS_KEY_ID'],
      accessKeyId: process.env['ALIBABA_CLOUD_ACCESS_KEY_ID'],
      // 必填，请确保代码运行环境设置了环境变量 ALIBABA_CLOUD_ACCESS_KEY_SECRET。
      accessKeySecret: process.env['ALIBABA_CLOUD_ACCESS_KEY_SECRET'],
    });
    // Endpoint 请参考 https://api.aliyun.com/product/ImageSearch
    config.endpoint = `imagesearch.cn-shanghai.aliyuncs.com`;
    return new ImageSearch20210501(config);
  }

  static async main(imgUrl: string) {
    const client = Client.createClient();
    const searchByUrlRequest = new $ImageSearch20210501.SearchByUrlRequest({
      picUrl: imgUrl,
    });
    const runtime = new $Util.RuntimeOptions({});
    try {
      // 复制代码运行请自行打印 API 的返回值
      const result = await client.searchByUrlWithOptions(
        searchByUrlRequest,
        runtime,
      );
      console.log(result.body.data.auctions);
      return result.body.data.auctions;
    } catch (error) {
      // 此处仅做打印展示，请谨慎对待异常处理，在工程项目中切勿直接忽略异常。
      // 错误 message
      console.log(error.message);
      // 诊断地址
      console.log(error.data['Recommend']);
    }
  }
}
