export interface EpisodeParam {
    sid: string
    vid: string
    link: string
    next: string
}

export interface EpisodeResult {
    page: {
        next: string
    }
    items: {
        sid: string
        vid: string
        title: string
        cht: string
        cvt: string
        link: string
    }[]
}