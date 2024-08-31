# 视频资源


## 字段定义

| 字段       | 类型     | 说明                                                                    |
|----------|--------|-----------------------------------------------------------------------|
| platform | string | 平台表示：qq/iqiyi/youku/mgtv                                              |
| channel  | string | 频道: tv/movie/cartoon                                                  |
| sakuhin  | string | 影视作品（电影、电视剧、动漫、短视频...），包含一个或多个视频，英文表示影视作品的单词歧义太多，这里采用的是日语 `さくひん` 的罗马音 |
| video    | string | 视频                                                                    |
|          |        |                                                                       |
| sid      | string | sakuhin id 唯一                                                         |
| vid      | string | video id   唯一                                                         |

- `platform + sid` 构成唯一键

## 接口定义

> [!TIP]
> 下面接口定义和抽象类都是建议

### 发现页接口 - QuerySakuhin

> 分页获取平台影视作品列表

###### 请求参数

```typescript
// 第一种方式: 不同平台所需的参数和参数形式都有不同，不同平台参数需要继承下面的抽象类，实现下面方法
abstract class QuerySakuhinRequest {
    // 返回对应的平台
    abstract getPlatform(): string;
}
function QuerySakuhin(req: QuerySakuhinRequest):QuerySakuhinResponse{};

// 第二种方式：这种方式无法限制传递的参数规则，需要明确的文档去规范传参
function QuerySakuhin(platform: string, req: Record<string, any>):QuerySakuhinResponse{};
```

###### 响应参数

```typescript
// 响应结果应该是一样的
class QuerySakuhinResponse {
    // 下一页参数
    next: string
    // 是否有下一页
    hasNext: boolean
    // 列表
    items: SakuhinItem[]
}

class SakuhinItem {}
```

### 搜索页接口 - SearchSakuhin

> 根据关键字分页搜索影视作品列表

###### 请求参数

```typescript
// 第一种方式: 不同平台所需的参数和参数形式都有不同，不同平台参数需要继承下面的抽象类，实现下面方法
abstract class SearchSakuhinRequest {
    // 返回对应的平台
    abstract getPlatform(): string;
}
function SearchSakuhin(req: SearchSakuhinRequest):SearchSakuhinResponse{};

// 第二种方式：
function SearchSakuhin(platform: string, req: Record<string, any>):SearchSakuhinResponse{};
```

###### 响应参数

```typescript
// 响应结果应该是一样的
class SearchSakuhinResponse {
    // 下一页参数
    next: string
    // 是否有下一页
    hasNext: boolean
    // 列表
    items: SakuhinItem[]
}

class SakuhinItem {}
```

### 详情页接口 - GetSakuhinDetail

> 获取单个影视作品的详情信息

###### 请求参数

```typescript
// 第一种方式: 不同平台所需的参数和参数形式都有不同，不同平台参数需要继承下面的抽象类，实现下面方法
abstract class GetSakuhinDetailRequest {
    // 返回对应的平台
    abstract getPlatform(): string;
}
function GetSakuhinDetail(req: GetSakuhinDetailRequest):GetSakuhinDetailResponse{};

// 第二种方式：
function GetSakuhinDetail(platform: string, req: Record<string, any>):GetSakuhinDetailResponse{};
```

###### 响应参数

```typescript
// 响应结果应该是一样的
class GetSakuhinDetailResponse {
    item: SakuhinItem
}

class SakuhinItem {}
```

### 剧集页接口 - GetSakuhinVideos

> 获取某部影视作品下的所有分集列表

###### 请求参数

```typescript
// 第一种方式: 不同平台所需的参数和参数形式都有不同，不同平台参数需要继承下面的抽象类，实现下面方法
abstract class GetSakuhinVideosRequest {
    // 返回对应的平台
    abstract getPlatform(): string;
}
function GetSakuhinVideos(req: GetSakuhinVideosRequest):GetSakuhinVideosResponse{};

// 第二种方式：
function GetSakuhinVideos(platform: string, req: Record<string, any>):GetSakuhinVideosResponse{};
```

###### 响应参数

```typescript
// 响应结果应该是一样的
class GetSakuhinVideosResponse {
    // 下一页参数
    next: string
    // 是否有下一页
    hasNext: boolean
    items: VideoItem[]
}

class VideoItem {}
```

## 平台

- [腾讯视频](platform/qq.md)
- [爱奇艺](platform/iqiyi.md)
- [优酷视频](platform/youku.md)
- [芒果视频](platform/mgtv.md)


