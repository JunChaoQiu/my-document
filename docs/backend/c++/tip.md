# 写博客流程

1. 在 `docs/backend/c++/` 下面创建一个 	`xx.md` 的文件；
2. 在其中编写 `markdown` 格式内容；
3. 编写完成后，在 `docs/.vuepress/configs/sidebar/zh.ts` 中添加路由；
4. git 提交代码（使用插件）

本地预览代码，在命令行输入：`npm run docs:dev`