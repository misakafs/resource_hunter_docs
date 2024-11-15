import type {
    DetailParam,
    DetailResult,
    DiscoverParam,
    DiscoverResult,
    EpisodeParam,
    EpisodeResult,
    ParseParam,
    ParseResult,
    SearchParam,
    SearchResult,
} from "./models";

abstract class Platform {
    // 发现接口
    // 通常是分页获取热度影视作品列表
    abstract discover(param: DiscoverParam): Promise<DiscoverResult | null>

    // 搜索接口
    // 根据关键字分页搜索影视作品列表
    abstract search(param: SearchParam): Promise<SearchResult | null>

    // 详情接口
    // 获取单个影视作品的详情信息
    abstract detail(param: DetailParam): Promise<DetailResult | null>

    // 剧集接口
    // 获取某部影视作品下的所有分集列表
    abstract episode(param: EpisodeParam): Promise<EpisodeResult | null>

    // 解析接口
    // 视频解析
    abstract parse(param: ParseParam): Promise<ParseResult | null>
}

export default Platform
