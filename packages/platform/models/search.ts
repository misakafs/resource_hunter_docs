export interface SearchParam {
    size: number
    next: string
    keyword: string
}

export interface SearchResult {
    page: {
        next: string
    }
    items: {
        sid: string
        vid: string
        title: string
        metas: string[]
        cht: string
        cvt: string
        link: string
    }[]
}
