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

```text [是否有下一页]
$.data.has_next_page
```

```json [示例结果]
[
  true
]
```

:::

::: code-group

```text [下一页参数]
$.data.next_page_context
```

```json [示例结果]
[
  {
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
  }
]
```

:::

::: code-group

```text [作品列表信息]
$.data.module_list_datas[-1:].module_datas[0].item_data_lists.item_datas[?(@.item_type=='2')]..item_params
```

```json [示例结果]
[
  {
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
  }
]
```

:::

### 搜索页接口

- **请求地址：**`https://pbaccess.video.qq.com/trpc.videosearch.search_cgi.http/load_intent_list_info`
- **请求方法：**`GET`
- **请求头：**

| 字段           | 值                  | 必填 | 说明   |
|--------------|--------------------|----|------|
| Content-Type | `application/json` | 否  |      |
| referer      | `https://v.qq.com` | 是  |      |
| user-agent   |                    | 否  | 建议填个 |

- **URL参数：**

| 字段          | 类型     | 值                                                  | 说明                |
|-------------|--------|----------------------------------------------------|-------------------|
| vappid      | string | `34382579`                                         |                   |
| vsecret     | string | `e496b057758aeb04b3a2d623c952a1c47e04ffb0a01e19cf` |                   |
| platform    | number | 2                                                  |                   |
| queryFrom   | string | `4`                                                | 搜索方式              |
| pageContext | string | `boxType%3Dmainneed`                               | 必传                |
| pageNum     | number | 0                                                  | 分页，从0开始           |
| pageSize    | number | 10                                                 | 修改这个值对结果毫无影响，是固定值 |
| query       | string | `斗罗大陆`                                             | 搜索关键字,需要URLEncode |
| filterValue | string | ''                                                 | 必传，传个空字符串即可       |
| guid        | string | ''                                                 | 必传，传个空字符串即可       |
| preQid      | string | ''                                                 | 必传，传个空字符串即可       |
| g_tk        | string | ''                                                 | 必传，传个空字符串即可       |
| g_vstk      | string | ''                                                 | 必传，传个空字符串即可       |
| g_actk      | string | ''                                                 | 必传，传个空字符串即可       |

- **Body参数：**

```
无
```

- **响应结果：**

> [结果示例](https://github.com/misakafs/resource_hunter_docs/blob/main/datas/qq_search.json)，下面是一些关键字段的JSONPath，可以用来提取值


> [!TIP]
> 搜索结果包含很多看不见的控制字符（如ENQ（0x05）、ACK（0x06）等），可以使用正则替换成空字符串 `r'[\x00-\x1F\x7F-\x9F]'`

::: code-group

```text [列表内容]
// 精准搜索结果
$.data.normalList.itemList..videoInfo

// 相关搜索结果，如果上面获取不到数据，可以从下面的jsonpath获取
$.data.areaBoxList[0].itemList..videoInfo
```

```json [示例结果]
[{
  "videoDoc": null,
  "coverDoc": {
    "timeLong": 0,
    "byName": [
      "斗罗大陆动画版"
    ],
    "englishName": "",
    "TVStation": "",
    "presenters": [],
    "tutors": [],
    "score": 0,
    "edit_version": "TV版",
    "roles": [
      "唐三",
      "小舞",
      "戴沐白",
      "奥斯卡",
      "马红俊",
      "宁荣荣",
      "朱竹清"
    ],
    "secondTitle": "海神唐三在此，武魂殿何在",
    "topicName": "",
    "columnTitle": "",
    "stars": [],
    "resolution_list": [],
    "positiveContentID": ""
  },
  "columnDoc": null,
  "subjectDoc": {
    "videoNum": 0,
    "uploader": "",
    "desc": "海神唐三在此，武魂殿何在",
    "create_time": ""
  },
  "viewType": 1,
  "videoType": 3,
  "title": "斗罗大陆",
  "typeName": "动漫",
  "year": "2018",
  "checkupTime": "",
  "area": "",
  "language": [],
  "directors": [],
  "actors": [
    "唐三",
    "小舞",
    "戴沐白",
    "奥斯卡",
    "马红俊",
    "宁荣荣",
    "朱竹清"
  ],
  "secondBlockSite": null,
  "descrip": "唐门外门弟子唐？",
  "views": "",
  "imgUrl": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/m441e3rjq9kwpsc1700874697596/260",
  "url": "https://v.qq.com/x/cover/m441e3rjq9kwpsc.html",
  "recommendInfo": null,
  "subTitle": "海神唐三在此，武魂殿何在",
  "payStatus": 0
}]
```

:::

### 详情页接口

- **请求地址：**`https://pbaccess.video.qq.com/trpc.universal_backend_service.union_extra_data.UnionExtraData/FillUnionInfo`
- **请求方法：**`POST`
- **请求头：**

| 字段           | 值                  | 必填 | 说明   |
|--------------|--------------------|----|------|
| Content-Type | `application/json` | 否  |      |
| referer      | `https://v.qq.com` | 是  |      |
| origin      | `https://v.qq.com` | 是  |      |
| user-agent   |                    | 否  | 建议填个 |

- **URL参数：**

| 字段                     | 类型     | 值       | 说明 |
|------------------------|--------|---------|----|
| video_appid            | string | 3000010 |    |
| vplatform              | number | 2       |    |

- **Body参数：**

```json5
{
  /// 如果是要查某部、某些作品，传这个
  "cids": [
    "mzc00200xf3rir6"
  ],
  /// 如果要查某个、某些视频，传这个
  "vids": [
    
  ],
  "appid": "10001"
}
```

- **响应结果：**

> [结果示例](https://github.com/misakafs/resource_hunter_docs/blob/main/datas/qq_detail.json)，下面是一些关键字段的JSONPath，可以用来提取值


::: code-group

```text [列表内容]
// 作品详情: cid 要查看的作品ID
$.data.cover_infos.{cid}

// 视频详情：vid 要查看的视频ID
$.data.video_infos.{vid}
```

```json [示例结果]
[{
  "hollywood_online": "2023-06-24 10:00:00",
  "holly_online_time": "",
  "ip_online_status_id": [
    "8389611"
  ],
  "comment_show_type": "1",
  "positive_trailer": "1",
  "dokiid_ip": "2100094441",
  "keyword": [],
  "publish_date": "2023-06-24",
  "title": "斗罗大陆Ⅱ绝世唐门",
  "video_ids": [
    "i0046sewh4r",
    "d0046wwl041",
    "t0046wy5cub",
    "e0046aniuvl",
    "y0046ag25hd",
    "t0046naxydd",
    "s0046q6uh7r",
    "n00468uwo0m",
    "t0046lj1gj4",
    "j00469nx38s",
    "i0046uoh0bn",
    "f0047u13k1e",
    "t00474i4aud",
    "t0047d50nnf",
    "d0047bnp1y4",
    "w00470ku45g",
    "r0047w2uowi",
    "t00477gtn49",
    "o0047nptb3a",
    "g0047hez1gh",
    "l0047oxlook",
    "k0047s7xxfs",
    "f004721amno",
    "k0047xjxnod",
    "y0047ejtar0",
    "l0047xro2za",
    "k0047whdkmi",
    "p0047jhthkr",
    "u004793bt42",
    "x0047053ke4",
    "w0047ir30gc",
    "h0048vhny54",
    "c00488brvau",
    "g00486ifroy",
    "f0048cogao3",
    "d0048ik14je",
    "n0048gf9uro",
    "m004813bwbz",
    "z0048bb94qb",
    "k0048xsimza",
    "v0048x1kide",
    "g0048pc1pcg",
    "v004864fpw1",
    "r4100g7b5bq",
    "d4100t5ycgl",
    "a41005labws",
    "m4100es63nh",
    "l4100xo35yd",
    "q4100dcu4mz",
    "k410047q291",
    "z4100io5byz",
    "z41002bm0fg",
    "h41008b0o7k",
    "v4100idvkhi",
    "z4100c4f2tv",
    "s4100z5tj13",
    "l4100entk1l",
    "v4100litaor",
    "i4100l8tjpj",
    "g4100j2e7y7",
    "o4100hyn9y2",
    "s4100ogwtsz",
    "g41006w5kw1",
    "y4100p9fkik",
    "b41003ibh6q",
    "c41009b4j0u"
  ],
  "type": "3",
  "type_name": "动漫",
  "category_map": [
    "10994",
    "正片",
    "1204",
    "动漫",
    "3",
    "动漫"
  ],
  "leading_actor": [
    "梁达伟",
    "唐雅菁",
    "孙恺寅",
    "李卓霆",
    "林子渝",
    "潘丹妮",
    "陈凌攸"
  ],
  "tag": [],
  "area_name": "内地",
  "big_horizontal_pic_url": "",
  "second_title": "你我皆唐门，生在绝世中",
  "episode_all": "104",
  "guests": [],
  "cartoon_age": "",
  "new_pic_hz": "https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc00200xf3rir61724993672200/0",
  "new_pic_vt": "https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200xf3rir61725007365778/0",
  "copyright_id": "1394",
  "cover_checkup_grade": "4",
  "data_checkup_grade": "4",
  "data_flag": "327936",
  "play_page_style_control_id": [],
  "copyright_negotiation_id": "",
  "pay_for_knowledge_id": [],
  "interaction_type_id": [],
  "show_gift": false,
  "pay_status_exchange": false,
  "column_info": {
    "title": "",
    "column_id": ""
  },
  "description": "这里没有魔法，没有斗",
  "alias": [
    "绝世唐门动画版"
  ],
  "video_num": "66",
  "outsite_source": "0",
  "middle_content_type_id": "",
  "positive_content_id": "1543606",
  "last_cover": "",
  "cid_content_structure_id": "",
  "is_free": false,
  "episode_updated": "",
  "cover_id": "",
  "clips_ids": [],
  "imgtag_ver": "",
  "normal_ids": "",
  "pc_client_imgtag": "",
  "topic_id_list": "",
  "vip_ids": "",
  "pay_status": "0",
  "cliv96_imgtag": "",
  "chase_calendar_expiration_date": "",
  "update_calendar": ""
}]
```

:::

### 剧集页接口

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
| video_appid            | string | 3000010 |    |
| vplatform              | number | 2       |    |
| vversion_name          | string | 8.9.10  |    |

- **Body参数：**

```json5
{
  "page_params": {
    "req_from": "web_vsite",
    "page_id": "vsite_episode_list",
    "page_type": "detail_operation",
    "id_type": "1",
    "cid": "mzc00200xf3rir6",
    // 分页，从0开始，每页固定pageSize = 30，会有特殊情况大于30
    "page_num": "1",
    "page_context": "cid=mzc00200xf3rir6",
    "detail_page_type": "1"
  },
  "has_cache": 1
}
```

- **响应结果：**

> [结果示例](https://github.com/misakafs/resource_hunter_docs/blob/main/datas/qq_video.json)，下面是一些关键字段的JSONPath，可以用来提取值

::: code-group

```text [作品列表信息]
$.data.module_list_datas[-1:].module_datas[0].item_data_lists.item_datas[?(@.item_type=='1')]..item_params
```

```json [示例结果]
[
  {
    "image_url": "https://vpic-cover.puui.qpic.cn/x0047053ke4/x0047053ke4_1704489585_hz.jpg/496",
    "refresh_page": "0",
    "version_id": "",
    "title": "30",
    "duration": "1294",
    "aspect": "1.777778",
    "ui_type": "2",
    "businessInfo": "{\"language_info\":{}}",
    "cid": "mzc00200xf3rir6",
    "vid": "x0047053ke4",
    "c_title_output": "030",
    "imgtag_all": "",
    "union_title": "斗罗大陆2绝世唐门_030",
    "episode_on_chapter": "",
    "video_subtitle": "",
    "publish_date": "",
    "c_full": "0",
    "is_no_store_watch_history": "0",
    "play_title": "斗罗大陆Ⅱ绝世唐门 第030话",
    "is_trailer": "0"
  }
]
```

:::