const { merge } = require("webpack-merge")
const common = require("./common.config.js")

module.exports = merge(common, {
  mode: "production",
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          name: "vendor",
          chunks: "all",
          test: /node_modules/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `npm.${packageName.replace("@", "")}`
          }
        },
        common: {
          name: "common",
          minChunks: 2,
          chunks: "all",
          priority: 10,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  }
})

