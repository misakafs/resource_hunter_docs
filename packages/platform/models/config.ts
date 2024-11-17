export interface Filter {
    key: string
    name: string
    value: string
}

export interface Config {
    version: string
    parsers: {
        xm: {
            iv: string
            origin: string
            url: string
            cache: string
        }
    }
    channels: {
        tv: string
        movie: string
        anime: string
        variety: string
        short: string
        documentary: string
    }
    platforms: {
        qq: {
            version: string
            referer: string
            channels: {
                name: string
                value: string
                filter: Filter[][]
            }[]
            discover: {
                method: string
                url: string
                videoAppid: string
                pageType: string
                pageId: string
            }
            search: {
                method: string
                url: string
                version: string
            }
        }
    }
}
