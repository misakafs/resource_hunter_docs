# 解析接口

### 请求参数

```json5
{
  "link": "",       // 需要解析的链接
}
```

### 响应结果

```json5
{
  "url": "",        // 播放链接
  "usable": 0,      // 0 - 永久使用; 1 - 只能使用一次; 2 - 有时间限制(不同平台的时间不一样)
  "status": 0,      // 0 - 未解析; 1 - 不能解析; 2 - 解析成功
}
```