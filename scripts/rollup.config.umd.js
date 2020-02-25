import base from './rollup.config.base.js'
import pkg from '../package.json';

const config = Object.assign({}, base, {
  output: {
    file: pkg.main,
    format: 'umd'
  },
})

// config.plugins.push(uglify())

export default config