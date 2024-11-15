import type { Config } from '../models'
import { parseBase64Yaml } from '../utils/index.ts'

const f = Bun.file('./config/0')

const text = await f.text()

const config = parseBase64Yaml<Config>(text.replace(/\s+/g, ''))

export default config
