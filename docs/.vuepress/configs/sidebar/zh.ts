/*
 * @Descripttion: 
 * @version: 
 * @Author: qiuxchao
 * @Date: 2022-07-12 15:32:23
 * @LastEditors: qiuxchao
 * @LastEditTime: 2022-09-15 19:53:19
 */
import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
	'/backend/': [
		{
			text: 'leetcode',
			collapsible: true,
			children: ['/backend/leetcode/t1.md']
		},
		{
			text: 'C++',
			collapsible: true,
			children: [
				'/backend/c++/tip.md',
				'/backend/c++/basic.md',
				'/backend/c++/02data&expressons.md'
			]
		},
		{
			text: 'Python',
			collapsible: true,
			children: [
				'/backend/python/pyhomework/1.md',
				'/backend/python/01_str_num.md',
				'/backend/python/02_list_for.md',
				'/backend/python/03_if.md',
				'/backend/python/04_input_while.md',
				'/backend/python/05_tuple.md',
				'/backend/python/06_dict.md',
				'/backend/python/07_def.md',
				'/backend/python/08_format.md',
				'/backend/python/09_encode_decode.md',
				'/backend/python/venv.md',
				'/backend/python/decorators.md'
			]
		},
		{
			text: 'Java',
			collapsible: true,
			children: ['/backend/java/basic.md', '/backend/java/oop.md']
		}
	],
	'/tools/': [
		{
			text: 'Git',
			collapsible: true,
			children: ['/tools/git/git.md']
		}
	]
}
