## Intro

由于 `webpack` 打包组件库有以下缺点：

1. 不支持输出 esm 包（最大的缺点）,无法`tree shaking`
2. 代码冗余，自己加了运行函数
3. 按需加载需要`babel-plugin-import`插件才能实现，不够优雅

## TODO

1. 以下使用方法中，为什么`esm`的`vue`组件库没有被`webpack tree shaking` 掉？？？

```js
import { componentA } from 'vueui' //vueui 入口文件 module 是esm格式
```

2. 如果用 `rollup-plugin-postcss` 按照 `component` 路径单独打出来的 `css` 包，为啥内容都一样？？如果用 `rollup-plugin-vue` 只能内联 `css` 或者打包出一个总的 css 文件，不能拆分。

## Features

1. 使用`@babel/runtime-corejs3`,处理一些 es 方法的垫片，防止污染用户全局环境
2. ` external``@babel/corejs、helper `等相关处理方法，减少打包体积
