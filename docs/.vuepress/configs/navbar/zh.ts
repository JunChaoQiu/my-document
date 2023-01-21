/*
 * @Descripttion: 
 * @version: 
 * @Author: qiuxchao
 * @Date: 2022-07-12 15:32:23
 * @LastEditors: qiuxchao
 * @LastEditTime: 2022-09-05 10:27:42
 */
import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
	{
		text: '后端技术',
		children: [
			{
				text: 'C++',
				link: '/backend/c++/basic.md',
			},
			{
				text: 'Python',
				link: '/backend/python/01_str_num.md',
			},
			{
				text: 'Java',
				link: '/backend/java/basic.md',
			},
		],
	},
]
