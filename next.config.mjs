import {withContentlayer} from 'next-contentlayer'
import withNextIntl from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:  true
}

const withPlugins = (plugins)=>(config)=>
plugins.reduce((acc,plugin)=>plugin(acc),config)

export default withPlugins([withNextIntl('./lib/i18n.ts'),withContentlayer])(nextConfig)
