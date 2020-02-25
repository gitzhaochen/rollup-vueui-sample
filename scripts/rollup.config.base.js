import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import VuePlugin from 'rollup-plugin-vue'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
export default {
  input: 'packages/index.js',
  plugins: [
    resolve(),
    commonjs({ include: 'node_modules/**' }),
    json(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    VuePlugin({css:false}),
    terser(),
    postcss({
      extract:true
    })
  ],
  external(id) {
    // 对babel-runtime corejs等进行external
    return /^@babel/.test(id) || id === 'vue'
  }
}
