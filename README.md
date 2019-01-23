# mpvue-quickstart

> fork 自 [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack) 修改而来

![tree](https://user-images.githubusercontent.com/16759376/49718032-d80e2d80-fc93-11e8-93f2-fd3e60596590.jpg)

## 基本用法

```bash
$ npm install -g @vue/cli @vue/cli-init
$ vue init C4-zhengzhou/mpvue my-project
$ cd my-project
$ npm i
$ npm run dev
```

## 主要特性

- 移除 express 等无关依赖
- 引入 mpvue-entry，移除冗余的 main.js 文件
- 引入 mpvue-config-loader，支持在 vue 文件中书写页面配置
- 引入 mpvue-router-patch，支持使用类 vue-router 的 api
- 支持官方分包（mpvue-loader@^1.1.0），简化配置方式
- 引入 less, 以及 mixin、theme 全局变量自动引入
- 引入 iconfont, 全局自动引入
- 引入 mpvue-toast、mpvue-picker、mpvue-animated-number

## 详细文档请查阅

- [quickstart](http://mpvue.com/mpvue/quickstart)
- [mpvue-entry](https://github.com/F-loat/mpvue-entry)
- [mpvue-config-loader](https://github.com/F-loat/mpvue-config-loader)
- [mpvue-router-patch](https://github.com/F-loat/mpvue-router-patch)
- [mpvue-toast](https://github.com/linrui1994/mpvue-toast)
- [mpvue-picker](https://github.com/MPComponent/mpvue-picker)
- [mpvue-animated-number](https://github.com/gaomd/mpvue-animated-number)
