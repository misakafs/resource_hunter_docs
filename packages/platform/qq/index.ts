import Platform from '../platform.ts'
import config from '../config'
import { request, base64Decode, base64Encode, g } from '../utils/index.ts'
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
} from '../models'

export class QQ extends Platform {
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

        const nextPageContextJsonPath = '$.data.next_page_context'

        const next = base64Encode(JSON.stringify(g(result, nextPageContextJsonPath)))

        const itemJsonPath =
            '$.data.module_list_datas[-1].module_datas[0].item_data_lists.item_datas..item_params[?(@.item_type=="2")]'

        const list = g<any[]>(result, itemJsonPath)

        if (!list) {
            return null
        }

        const items = []

        list.forEach((value) => {
            items.push({
                sid: value.cid,
                vid: '',
                title: value.title,
                subtitle: value.second_title,
                cht: value.new_pic_hz,
                cvt: value.new_pic_vt,
                link: `https://v.qq.com/x/cover/${value.cid}.html`,
            })
        })

        return {
            page: {
                next: next,
            },
            items: items,
        }
    }


    public async search(param: SearchParam): Promise<SearchResult | null> {
        const headers = {
            'Content-Type': 'application/json',
            Referer: config.platforms.qq.referer,
            Origin: config.platforms.qq.referer,
            'User-Agent': this.userAgent,
        }


        const params = {
            vplatform: 2,
        }

        const pageNum = param.next.length === 0 ? 0 : Number.parseInt(base64Decode(param.next))

        const payload = {
            version: config.platforms.qq.search.version,
            query: param.keyword,
            pagenum: pageNum,
            pagesize: 30,
            queryFrom: 0,
            extraInfo: {
                isNewMarkLabel: "1",
                multi_terminal_pc: "1",
            }
        }

        const result = await request({
            method: config.platforms.qq.search.method,
            url: config.platforms.qq.search.url,
            headers: headers,
            params: params,
            data: payload,
        })

        if (!result?.data?.areaBoxList?.length) {
            return null
        }

        const itemJsonPath = '$.data.areaBoxList[0].itemList.*'

        const list = g<any[]>(result, itemJsonPath)

        if (!list) {
            return null
        }

        const items = []

        list.forEach((value) => {
            items.push({
                sid: value.doc.id,
                vid: '',
                title: value.videoInfo.title,
                metas: [
                    value.videoInfo.subTitle,
                    value.videoInfo.descrip,
                ],
                cht: '',
                cvt: value.videoInfo.imgUrl,
                link: `https://v.qq.com/x/cover/${value.doc.id}.html`,
            })
        })

        return {
            page: {
                next: base64Encode((pageNum + 1) + '')
            },
            items: items,
        }
    }

    public async detail(param: DetailParam): Promise<DetailResult | null> {
        return null
    }

    public async episode(param: EpisodeParam): Promise<EpisodeResult | null> {
        return null
    }

    public async parse(param: ParseParam): Promise<ParseResult | null> {
        return null
    }

}
