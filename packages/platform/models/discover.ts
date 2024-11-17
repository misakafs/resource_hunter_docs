export interface DiscoverParam {
    size: number
    next: string
    channel: string
    filter: string
}

export interface DiscoverResult {
    page: {
        next: string
    }
    items: {
        sid: string
        vid: string
        title: string
        subtitle: string
        cht: string
        cvt: string
        link: string
    }[]
}
