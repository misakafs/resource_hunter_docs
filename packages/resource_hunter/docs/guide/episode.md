# 剧集接口

### 请求参数

```json5
{
  "sid": "",       // 作品ID，可以为空
  "vid": "",       // 视频ID
  "link": "",      // 视频地址
  "next": "",      // 下一页参数，base64编码
}
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
    "cht": "",       // 横屏封面
    "cvt": "",       // 竖屏封面
    "link": ""       // 视频地址
  }]
}
```