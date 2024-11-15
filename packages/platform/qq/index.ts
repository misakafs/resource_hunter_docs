import Platform, from '../platform.ts'
import config from '../config'
import { request, base64Decode, base64Encode } from '../utils/index.ts'
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
} from "../models";

class QQ extends Platform {
    private readonly userAgent: string

    constructor(userAgent: string = '') {
        super()
        this.userAgent = userAgent
    }

    public async discover(param: DiscoverParam): Promise<DiscoverResult | null> {
        const headers = {
            'Content-Type': 'application/json',
            Referer: config.platforms.qq.referer,
            'User-Agent': this.userAgent,
        }

        const params = {
            video_appid: config.platforms.qq.discover.videoAppid,
            vplatform: 2,
            vversion_name: config.platforms.qq.version,
            new_mark_label_enabled: 1,
        }

        let pageContent = {}

        if (param?.next?.length) {
            pageContent = JSON.parse(base64Decode(param.next))
        }

        const payload = {
            page_params: {
                // 频道ID
                channel_id: config.platforms.qq.channels.find((value) => value.name === param.channel)?.value ?? '',
                // 过滤参数
                filter_params: param?.filter ?? '',
                // 每页条数
                page_size: (param?.size ?? 20) + '',
                page_type: config.platforms.qq.discover.pageType,
                page_id: config.platforms.qq.discover.pageId,
                // 是否使用缓存
                has_cache: '1',
            },
            // 下一页参数，没有则不传，下一页参数会在响应结果里
            page_context: pageContent,
        }

        const result = await request({
            method: config.platforms.qq.discover.method,
            url: config.platforms.qq.discover.url,
            headers: headers,
            params: params,
            data: payload,
        })

        if (!result?.data) {
            return null
        }



        return null;
    }

    public async detail(param: DetailParam): Promise<DetailResult | null> {
        return null;
    }

    public async episode(param: EpisodeParam): Promise<EpisodeResult | null> {
        return null;
    }

    public async parse(param: ParseParam): Promise<ParseResult | null> {
        return null;
    }

    public async search(param: SearchParam): Promise<SearchResult | null> {
        return null;
    }


}
