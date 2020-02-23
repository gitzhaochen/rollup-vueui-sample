import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/dist.js',
    format: 'iife',
    name: 'allenui',
    // globals: {
    //   lodash: '_'
    // }
  },
  plugins: [
    resolve(),
    commonjs({ include: 'node_modules/**' }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ],
  // external: ['lodash']
}
