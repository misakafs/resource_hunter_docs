# 腾讯视频

## 枚举值

- 平台值(vplatform)

```
V_WEB: 2
APHONE: 3
IPAD: 4
IPHONE: 5
APAD: 6
WINDOWS: 16
MAC: 18
```

- 频道

```
100113: tv        电视剧
100105: doco      纪录片  
100119: cartoon   动漫
100150: child     少儿
100173: movie     电影
100109: variet    综艺
110755: mini      短剧
```

- 过滤参数(filter_params)

```
- sort
  - 75 最热
  - 83 最新
  - 81 高分好评
```

## 接口

### 发现页接口

- **请求地址：**`https://pbaccess.video.qq.com/trpc.universal_backend_service.page_server_rpc.PageServer/GetPageData`
- **请求方法：**`POST`
- **请求头：**

| 字段           | 值                  | 必填 | 说明   |
|--------------|--------------------|----|------|
| Content-Type | `application/json` | 是  |      |
| referer      | `https://v.qq.com` | 是  |      |
| user-agent   |                    | 否  | 建议填个 |

- **URL参数：**

| 字段                     | 类型     | 值       | 说明 |
|------------------------|--------|---------|----|
| video_appid            | string | 1000005 |    |
| vplatform              | number | 2       |    |
| vversion_name          | string | 8.9.10  |    |
| new_mark_label_enabled | number | 1       |    |

- **Body参数：**

```json5
{
  "page_params": {
    // 频道ID
    "channel_id": "100113",
    // 过滤参数
    "filter_params": "sort=75",
    // 每页条数
    "page_size": "2",
    "page_type": "channel_operation",
    "page_id": "channel_list_second_page",
    // 是否使用缓存
    "has_cache": "1"
  },
  // 下一页参数，没有则不传，下一页参数会在响应结果里
  "page_context": {}
}
```

- **响应结果：**

> [结果示例](https://github.com/misakafs/resource_hunter_docs/blob/main/datas/qq_query.json)，下面是一些关键字段的JSONPath，可以用来提取值

::: code-group

```jsonpath [是否有下一页]
$.data.has_next_page
```

```json [示例结果]
[true]
```

:::


::: code-group

```jsonpath [下一页参数]
$.data.next_page_context
```

```json [示例结果]
[{
  "data_src_647bd63b21ef4b64b50fe65201d89c6e_data_version": "",
  "data_src_647bd63b21ef4b64b50fe65201d89c6e_page": "1",
  "page_index": "1",
  "sdk_page_ctx": "{\"page_offset\":1,\"page_size\":2,\"used_module_num\":2}",
  "view_ad_ssp_ad_count_send": "0",
  "view_ad_ssp_cards_consumed": "0",
  "view_ad_ssp_ctx_version": "1",
  "view_ad_ssp_flush_num": "1",
  "view_ad_ssp_minigame_ad_count_send": "0",
  "view_ad_ssp_minigame_cards_consumed": "0",
  "view_ad_ssp_minigame_ctx_version": "1",
  "view_ad_ssp_minigame_flush_num": "1",
  "view_ad_ssp_minigame_remaining": "0",
  "view_ad_ssp_netmovie_ad_count_send": "0",
  "view_ad_ssp_netmovie_cards_consumed": "0",
  "view_ad_ssp_netmovie_ctx_version": "1",
  "view_ad_ssp_netmovie_flush_num": "1",
  "view_ad_ssp_netmovie_remaining": "0",
  "view_ad_ssp_remaining": "0"
}]
```

:::

::: code-group

```jsonpath [作品列表信息]
$.data.module_list_datas[-1:].module_datas[0].item_data_lists.item_datas[?(@.item_type=='2')]..item_params
```

```json [示例结果]
[{
  "area_name": "内地",
  "areaName": "内地",
  "cid": "mzc00200c9usasa",
  "column_id": "0",
  "cover_checkup_grade": "4",
  "epsode_pubtime": "2024-08-30 17:50:01",
  "gen_area_name": "内地",
  "imgtag_ver": "",
  "item_type": "2",
  "langue": "普通话",
  "leading_actor": "[张晚意 王楚然 刘令姿 常华森 张弛 袁雨萱]",
  "main_genre": "爱情",
  "marklabel_4_0": "1",
  "new_pic_hz": "https://puui.qpic.cn/vcover_hz_pic/0/mzc00200c9usasa1697979282781/750",
  "new_pic_vt": "https://puui.qpic.cn/vcover_vt_pic/0/mzc00200c9usasa1697979259711/350",
  "poster_type": "1",
  "publish_date": "2024-08-12",
  "second_title": "张晚意王楚然宿敌过家家",
  "series_name": "柳舟记",
  "show_type": "0",
  "sub_title": "张晚意 王楚然 刘令姿",
  "third_title": "讨论破100万",
  "third_title_type": "50",
  "timelong": "更新至34集",
  "title": "柳舟记",
  "type": "2",
  "video_language_name": "[普通话]",
  "year": "2024"
}]
```

:::

### 搜索页接口

- **请求地址：**
- **请求方法：**
- **请求头：**
- **URL参数：**
- **Body参数：**
- **响应结果：**

### 详情页接口

- **请求地址：**
- **请求方法：**
- **请求头：**
- **URL参数：**
- **Body参数：**
- **响应结果：**

### 剧集页接口

- **请求地址：**
- **请求方法：**
- **请求头：**
- **URL参数：**
- **Body参数：**
- **响应结果：**