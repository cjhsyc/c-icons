import { readdir, writeFile } from 'fs/promises'
import path from 'path'
import { format } from 'prettier'
import { fileURLToPath } from 'url'

import type { BuiltInParserName } from 'prettier'

// es module中不会自动注入__dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const iconDir = path.resolve(__dirname, '../src/svg')

// 首字母大写
const upper = (str: string) => str.slice(0, 1).toUpperCase() + str.slice(1)

const icons = (await readdir(iconDir)).map((svg) => svg.replace('.svg', ''))

// 代码格式化
const formatCode = (code: string, parser: BuiltInParserName = 'typescript') =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })

const code = formatCode(
  icons.map((icon) => `import ${upper(icon)} from '~icons/c/${icon}'`).join('\n') +
    '\nexport {\n' +
    icons.map((icon) => `${upper(icon)},`).join('\n') +
    '\n}'
)
await writeFile(path.resolve(__dirname, '../src/icons.ts'), code, 'utf-8')
