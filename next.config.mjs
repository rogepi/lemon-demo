import { createContentlayerPlugin } from 'next-contentlayer'
import withNextIntl from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withContentlayer = createContentlayerPlugin({})

const withPlugins = (plugins) => (config) =>
  plugins.reduce((acc, plugin) => plugin(acc), config)

export default withPlugins([withNextIntl('./lib/i18n.ts'), withContentlayer])(
  nextConfig
)
