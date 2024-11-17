import type { Filter } from '../models'
import config from '../config'
import { request, g, base64Encode } from '../utils/index.ts'

const userAgent = ''

// ---------------------------- QQ --------------------------

// 根据频道获取筛选条件
const getQQFilterByChannel = async (channel: string): Promise<Filter[][]> => {
    const headers = {
        'Content-Type': 'application/json',
        Referer: config.platforms.qq.referer,
        'User-Agent': userAgent,
    }

    const params = {
        video_appid: config.platforms.qq.discover.videoAppid,
        vplatform: 2,
        vversion_name: config.platforms.qq.version,
        new_mark_label_enabled: 1,
    }

    const payload = {
        page_params: {
            channel_id: channel,
            page_size: '1',
            page_type: config.platforms.qq.discover.pageType,
            page_id: config.platforms.qq.discover.pageId,
            has_cache: '1',
        },
        page_context: {},
    }

    const result = await request({
        method: config.platforms.qq.discover.method,
        url: config.platforms.qq.discover.url,
        headers: headers,
        params: params,
        data: payload,
    })

    const paths =
        '$.data.module_list_datas[1].module_datas[0].item_data_lists.item_datas..[?(@.item_params.item_type=="11")].item_params'

    const items = g<any[]>(result, paths)

    if (!items || !items.length) {
        throw new Error(`channel: ${channel}, 结果是否为空: ${result.ret}`)
    }

    const filters: Filter[][] = []
    const fs: Filter[] = []

    let level = '0'

    for (let i = 0; i < items.length; i++) {
        if (items[i].level !== level) {
            if (fs.length > 0) {
                filters.push([...fs])
                fs.length = 0
            }
            level = items[i].level
        }
        fs.push({
            key: items[i].filter_key,
            name: items[i].option_name,
            value: items[i].option_value,
        })
    }
    if (fs.length > 0) {
        filters.push([...fs])
    }

    return filters
}

const handlerQQ = async (): Promise<void> => {
    const filterMap: Record<string, Filter[][]> = {}
    for (const c of config.platforms.qq.channels) {
        const f = await getQQFilterByChannel(c.value)
        filterMap[c.value] = f
    }

    for (let i = 0; i < config.platforms.qq.channels.length; i++) {
        config.platforms.qq.channels[i].filter = filterMap[config.platforms.qq.channels[i].value] ?? []
    }
}

// ---------------------------- QQ --------------------------

// ---------------------------- main --------------------------

const main = async (): Promise<void> => {
    await handlerQQ()
    await Bun.write('./config/1', base64Encode(JSON.stringify(config)))
}

await main()
