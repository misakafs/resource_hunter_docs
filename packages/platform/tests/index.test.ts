import { expect, test } from 'bun:test'
import { QQ } from '../qq/index.ts'

const userAgent =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5410.0 Safari/537.36'

test('QQ', async () => {
    const q = new QQ(userAgent)

    const d = await q.discover({
        size: 20,
        next: '',
        channel: 'tv',
        filter: '',
    })

    expect(d?.items?.length).toBe(20)
    expect(d?.page?.next.length).toBeGreaterThan(0)
})
