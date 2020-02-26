import path from 'path'
import base from './rollup.config.base.js'
import pkg from '../package.json'

import { getDirsByPath } from './utils'

const dirs = getDirsByPath(path.join(process.cwd(), './packages'))

const configs = [
  Object.assign({}, base, {
    input: `./packages/index.js`,
    output: {
      file: pkg.module,
      format: 'esm'
    }
  })
].concat(
  dirs.map(dir => {
    return Object.assign({}, base, {
      input: `./packages/${dir}/index.js`,
      output: {
        file: `dist/esm/${dir}/index.js`,
        format: 'esm'
      }
    })
  })
)

export default configs
