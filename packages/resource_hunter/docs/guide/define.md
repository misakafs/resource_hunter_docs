# 定义

## 字段定义

| 字段       | 类型     | 说明                                                                    |
|----------|--------|-----------------------------------------------------------------------|
| platform | string | 平台：qq/iqiyi/youku/mgtv                                                |
| channel  | string | 频道: tv/movie/anime/variety/short/documentary                          |
| sakuhin  | string | 影视作品（电影、电视剧、动漫、短视频...），包含一个或多个视频，英文表示影视作品的单词歧义太多，这里采用的是日语 `さくひん` 的罗马音 |
| video    | string | 视频                                                                    |
|          |        |                                                                       |
| sid      | string | sakuhin id 唯一                                                         |
| vid      | string | video id   唯一                                                         |
|          |        |                                                                       |
| title    | string | 标题                                                                    |
| subtitle | string | 副标题                                                                   |
| desc     | string | 描述                                                                    |
| cvt      | string | 纵向封面                                                                  |
| cht      | string | 横向封面                                                                  |
| meta     | string | 元数据：副标题、主演、年份、地区、时间、描述等等信息                                            |
| url      | string | 播放链接                                                                  |
| link     | string | 原地址                                                                   |
| dm       | string | 弹幕地址                                                                  |


## 接口定义

- 发现接口(discover)
- 搜索接口(search)
- 详情接口(detail)
- 剧集接口(episode)
- 解析接口(parse)
- 弹幕接口(danmu)