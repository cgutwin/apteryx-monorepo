const { merge } = require("webpack-merge")
const common = require("./common.config.js")
const path = require("path")

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    historyApiFallback: true,
    port: 3000,
    https: true,
    key: path.resolve(__dirname, "ssl/localhost.key"),
    cert: path.resolve(__dirname, "ssl/localhost.crt"),
    host: "0.0.0.0",
    disableHostCheck: true,
    public: "0.0.0.0:3000",
    contentBase: path.join(__dirname, "../public"),
    overlay: true,
    proxy: {
      "/api": "http://localhost:4000"
    }
  }
})
