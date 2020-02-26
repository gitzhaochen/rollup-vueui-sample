import path from 'path'
import base from './rollup.config.base.js'
import pkg from '../package.json'

import { getDirsByPath } from './utils'

const dirs = getDirsByPath(path.join(process.cwd(), './packages'))

const configs = [
  Object.assign({}, base, {
    input: `./packages/index.js`,
    output: {
      file: pkg.main,
      format: 'umd',
      name: pkg.name //包输出的全局变量名称
    }
  })
].concat(
  dirs.map(dir => {
    return Object.assign({}, base, {
      input: `./packages/${dir}/index.js`,
      output: {
        file: `dist/umd/${dir}/index.js`,
        format: 'umd',
        name: `${pkg.name}-${dir}`
      }
    })
  })
)

export default configs
