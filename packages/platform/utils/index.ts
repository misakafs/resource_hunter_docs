import * as CryptoJS from 'crypto-js'
import { parse, stringify } from 'yaml'
import axios from 'axios'
import * as jp from "jsonpathly";

export function base64Encode(data: string): string {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data))
}

export function base64Decode(data: string): string {
    return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(data))
}

export function parseBase64Yaml<T>(data: string): T {
    const decode = base64Decode(data)
    return parse(decode) as T
}

export async function request<T = any, R = axios.AxiosResponse<T>, D = any>(
    config: axios.AxiosRequestConfig<D>,
): Promise<T | null> {
    try {
        const response = await axios.request<T, R, D>(config)
        if (response.status === 200 && response.data) {
            return response.data as T
        }
        console.warn(`[${config.method}](${config.url}): ${response.statusText}`)
    } catch (e) {
        console.error(`[${config.method}](${config.url}): ${e}`)
    }
    return null
}

export function g<T = any>(data: unknown, paths: string): T {
    return jp.query(data, paths) as T
}