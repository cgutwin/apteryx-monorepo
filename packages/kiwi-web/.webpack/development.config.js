const { merge } = require("webpack-merge")
const common = require("./common.config.js")
const path = require("path")

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    cert: path.resolve(__dirname, "./ssl/localhost.crt"),
    historyApiFallback: true,
    host: "0.0.0.0",
    hot: true,
    https: true,
    key: path.resolve(__dirname, "./ssl/localhost.key"),
    port: 3000,
    proxy: {
      "/api": "http://localhost:4000"
    }
  }
})

