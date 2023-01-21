/*
 * @Descripttion: 
 * @version: 
 * @Author: qiuxchao
 * @Date: 2022-06-17 16:21:48
 * @LastEditors: qiuxchao
 * @LastEditTime: 2022-08-16 19:08:58
 */
import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import { navbarZh, sidebarZh } from './configs'



export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '湫的碎碎念',
  description: '一只前端崽',
  head: [['link', { rel: 'icon', href: '/images/head.jpg' }]],

  // Dev 配置项
  open: true,

  // 主题配置
  theme: defaultTheme({
    logo: '/images/head.jpg',
    navbar: navbarZh,
    sidebar: sidebarZh,
    sidebarDepth: 3,
    repo: 'https://github.com/qiuxchao',
    editLinkText: '编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    tip: '提示',
    warning: '注意',
    danger: '警告',
  }),

  // 插件
  plugins: [],

  markdown: {
    anchor: {
      level: [1, 2, 3, 4, 5, 6]
    },
  },

})