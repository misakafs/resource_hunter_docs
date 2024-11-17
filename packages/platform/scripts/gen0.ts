import * as CryptoJS from 'crypto-js'

function base64Encode(data: string): string {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data))
}

const f = Bun.file('./dist/config.yaml')

const text = await f.text()

const encode = base64Encode(text)

await Bun.write('./config/0', encode)
