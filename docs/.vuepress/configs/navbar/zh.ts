/*
 * @Descripttion: 
 * @version: 
 * @Author: qiuxchao
 * @Date: 2022-07-12 15:32:23
 * @LastEditors: qiuxchao
 * @LastEditTime: 2022-07-22 11:33:11
 */
import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
    {
        text: '前端技术',
        children: [
          {
            text: 'JavaScript',
            link: '/frontend/javascript/es6+.md',
          },
          {
            text: 'Css',
            link: '/frontend/css/vw_vh.md',
          },
          {
            text: 'React',
            link: '/frontend/react/react_redux.md',
          },
          {
            text: 'Webpack',
            link: '/frontend/webpack/summary.md',
          },
          {
            text: '网络',
            link: '/frontend/network/http.md',
          },
          {
            text: '算法',
            link: '/frontend/algorithm/sort_search.md',
          },
          {
            text: 'Canvas',
            link: '/frontend/canvas/',
          },
          '/frontend/typescript.md',
          '/frontend/jquery.md',
          '/frontend/bgw.md',
        ],
    },
    {
        text: '后端技术',
        children: [
          {
            text: 'NodeJs',
            link: '/backend/nodejs/fs.md',
          },
          {
            text: 'Python',
            link: '/backend/python/01_str_num.md',
          },
          {
            text: 'Java',
            link: '/backend/java/basic.md',
          },
          '/backend/php/',
        ],
      },
      {
        text: '运维技术',
        children: [
          '/operation/linux.md',
          '/operation/nginx.md',
          '/operation/ssl_ci.md',
          '/operation/gitlab.md',
          '/operation/jenkins.md',
          '/operation/redis.md'
        ],
      },
      {
        text: '工具',
        children: [
          '/tools/git.md'
        ],
      },
      {
        text: '技术分享',
        children: [
          '/share/code_review.md'
        ],
      },
]
