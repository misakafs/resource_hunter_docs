<script setup>
import MGTV from '../../components/MGTV.vue'
</script>

# [芒果视频](https://www.mgtv.com/)

## 枚举值

- 频道

```
1 - 综艺
2 - 电视剧
3 - 电影
10 - 少儿
50 - 动漫
51 - 纪录片
115 - 教育
```

## 接口

### 发现页接口

- **请求地址：**`https://pianku.api.mgtv.com/rider/list/pcweb/v3`
- **请求方法：**`GET`
- **请求头：**

| 字段           | 值                  | 必填 | 说明   |
|--------------|--------------------|----|------|
| Content-Type | `application/json` | 是  |      |
| referer      | `https://www.mgtv.com` | 是  |      |
| user-agent   |                    | 否  | 建议填个 |

- **URL参数：**

| 字段                     | 类型     | 值  | 说明      |
|------------------------|--------|----|---------|
| allowedRC            | string | 1  |       |
| platform            | string | `pcweb`  |       |
| channelId            | string | 2  | 频道      |
| pn              | number | 1  | 页码，从1开始 |
| pc          | number | 80 | 每页条数    |

- **Body参数：**
- **响应结果：**

> [结果示例](https://github.com/misakafs/resource_hunter_docs/blob/main/datas/mgtv_query.json)，下面是一些关键字段的JSONPath，可以用来提取值

::: code-group

```text [列表]
$.data.hitDocs.*
```

```json [示例结果]
[
  {
    "clipId": "625757",
    "fstlvlId": "2",
    "ic": "1",
    "img": "http://3img.hitv.com/preview/sp_images/2024/07/24/202407240942425208429.jpg",
    "imgUrlH": "http://2img.hitv.com/preview/sp_images/2024/07/24/202407240942495885568.jpg",
    "imgV": "",
    "jumpKind": "0",
    "kind": [
      "都市",
      "爱情",
      "职场"
    ],
    "params": "act=view&client=pcweb&channelId=2&fstlvlId=2&kind=&area=&fitAge=&edition=&year=&musicStyle=&chargeInfo=&sort=c2&clipId=625757",
    "partId": "0",
    "playPartId": "21561195",
    "playUrl": "",
    "prefix": "演员",
    "rightCorner": {
      "color": "#E4B659",
      "text": "VIP"
    },
    "rpt": "act=data-click&client=pcweb&channelId=2&fstlvlId=2&kind=&area=&fitAge=&edition=&year=&musicStyle=&chargeInfo=&sort=c2&ic=1&id=625757&name=%E7%A7%81%E8%97%8F%E6%B5%AA%E6%BC%AB",
    "schema": "omgotv://player?clipId=625757",
    "se_updateTime": "2024-08-30 10:14:47",
    "story": "在华远大厦一层工作的",
    "subtitle": "张佳宁,魏哲鸣,王真儿,周澄奥,代云帆,柯颖,许潇晗,胡可,刘钧",
    "title": "私藏浪漫",
    "updateInfo": "全32集",
    "views": "828851543",
    "year": "2024",
    "zhihuScore": "0.0"
  }
]
```

:::

### 搜索页接口

- **请求地址：**`https://mobileso.bz.mgtv.com/pc/search/v2`
- **请求方法：**`GET`
- **请求头：**


| 字段           | 值                  | 必填 | 说明   |
|--------------|--------------------|----|------|
| Content-Type | `application/json` | 是  |      |
| referer      | `https://www.mgtv.com` | 是  |      |
| user-agent   |                    | 否  | 建议填个 |

- **URL参数：**

[源码](https://github.com/misakafs/resource_hunter_docs/blob/main/components/MGTV.vue)

<MGTV />

- **Body参数：**
- **响应结果：**



### 详情页接口

- **请求地址：**`https://www.mgtv.com/b/328712/21453996.html`
- **请求方法：**`GET`
- **请求头：**
- **URL参数：**
- **Body参数：**
- **响应结果：**

### 剧集页接口

- **请求地址：**`https://pcweb.api.mgtv.com/episode/list`
- **请求方法：**`GET`
- **请求头：**

| 字段           | 值                  | 必填 | 说明   |
|--------------|--------------------|----|------|
| Content-Type | `application/json` | 是  |      |
| referer      | `https://www.mgtv.com` | 是  |      |
| user-agent   |                    | 否  | 建议填个 |

- **URL参数：**

| 字段                     | 类型     | 值 | 说明      |
|------------------------|--------|---|---------|
| allowedRC            | string | 1 |         |
| video_id            | string |   | 视频ID    |
| page              | number | 1 | 页码，从1开始 |
| size          | number | 80 | 每页条数    |

- **Body参数：**
- **响应结果：**

> [结果示例](https://github.com/misakafs/resource_hunter_docs/blob/main/datas/mgtv_video.json)，下面是一些关键字段的JSONPath，可以用来提取值

::: code-group

```text [列表]
$.data.list.*
```

```json [示例结果]
[
  {
    "t4": "第1集",
    "img": "http://1img.hitv.com/preview/sp_images/2024/04/25/202404251551464649476.jpg_220x125.jpg",
    "src_clip_id": "642956",
    "isnew": "0",
    "isvip": "0",
    "url": "/b/642956/20876670.html",
    "isIntact": "1",
    "corner": [
      {
        "area": "rightDown",
        "flag": "5",
        "color": "#FFFFFF",
        "font": "第1集"
      }
    ],
    "clip_id": "642956",
    "time": "07:25",
    "contentType": "0",
    "t1": "1",
    "t2": "破碎神格",
    "next_id": "20876671",
    "t3": "妖神记第七季 第1集",
    "ts": "2024-04-25 14:25:08.0",
    "video_id": "20876670"
  }
]
```

:::