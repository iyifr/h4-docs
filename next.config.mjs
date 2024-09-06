import createMDX from 'fumadocs-mdx/config'
import { rehypeCode } from 'fumadocs-core/mdx-plugins'

const withMDX = createMDX()

const options = {
	theme: 'poimandres',
}

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	rehypePlugins: [[rehypeCode, options]],
}

export default withMDX(config)
