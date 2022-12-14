import { readdir, writeFile } from 'fs/promises'
import path from 'path'
import { format } from 'prettier'
import { fileURLToPath } from 'url'

import type { BuiltInParserName } from 'prettier'

// es module中不会自动注入__dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const iconDir = path.resolve(__dirname, '../src/svg')

// 短横线转大驼峰
const hump = (str: string) => {
  const arr = str.split('-')
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1)
  }
  return arr.join('')
}

const icons = (await readdir(iconDir)).map((svg) => svg.replace('.svg', ''))

// 代码格式化
const formatCode = (code: string, parser: BuiltInParserName = 'typescript') =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })

const code = formatCode(
  icons.map((icon) => `import ${hump(icon)} from '~icons/c/${icon}'`).join('\n') +
    '\nexport {\n' +
    icons.map((icon) => `${hump(icon)},`).join('\n') +
    '\n}'
)
await writeFile(path.resolve(__dirname, '../src/icons.ts'), code, 'utf-8')
