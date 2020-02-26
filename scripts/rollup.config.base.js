import pkg from '../package.json'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import VuePlugin from 'rollup-plugin-vue'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
const isDev = process.env.NODE_ENV === 'development'

export default {
  input: 'packages/index.js',
  output: {
    file: pkg.module,
    format: 'esm'
  },
  plugins: [
    resolve(),
    commonjs({ include: 'node_modules/**' }),
    json(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    !isDev && terser(),
    VuePlugin({
      style: {
        postcssPlugins: [require('autoprefixer')()]
      }
    })
  ],
  external(id) {
    // 对babel-runtime corejs等进行external
    return /^@babel|core-js/.test(id) || id === 'vue'
  }
}
