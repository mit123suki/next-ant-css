const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === 'true',
}

const nextConfig = {
  env: {},
}

module.exports = withPlugins(
  [
    {
      webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
        config.plugins.push(new AntdDayjsWebpackPlugin())
        return config
      },
    },
    withBundleAnalyzer(bundleAnalyzerConfig),
  ],
  nextConfig
)
