import { map } from '@/.map'
import { createMDXSource } from 'fumadocs-mdx'
import { loader } from 'fumadocs-core/source'
import { icons } from 'lucide-react'
import { createElement } from 'react'

export const { getPage, getPages, pageTree } = loader({
	baseUrl: '/docs',
	rootDir: 'docs',
	source: createMDXSource(map),
	icon(icon) {
		if (icon) {
			if (icon in icons) {
				return createElement(icons[icon as keyof typeof icons], { size: 12 })
			} else {
				console.log('Not found')
			}
		}
		return
	},
})
