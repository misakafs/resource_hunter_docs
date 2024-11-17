# 发现接口

### 请求参数

```json5
{
  "size": 20,        // 数量
  "next": "",        // 下一页参数，base64编码
  "channel": "tv",   // 频道
  "filter": "",      // 过滤条件
}
```

- 频道枚举值:

```
tv: 电视剧
movie: 电影
anime: 动漫
variety: 综艺
short: 短剧
documentary: 纪录片
```

### 响应结果

```json5
{
  "page": {          // 分页参数
    "next": "",      // 下一页参数，base64编码
  },
  "items": [{        // 数据列表
    "sid": "",       // 作品ID，可以为空
    "vid": "",       // 视频ID
    "title": "",     // 标题
    "subtitle": "",  // 副标题
    "cht": "",       // 横屏封面
    "cvt": "",       // 竖屏封面
    "link": "",      // 视频地址
  }]
}
```