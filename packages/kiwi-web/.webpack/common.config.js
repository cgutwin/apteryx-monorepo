const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { ESBuildPlugin } = require("esbuild-loader")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const Dotenv = require("dotenv-webpack")

module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].bundle.js",
    publicPath: process.env.PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "esbuild-loader",
        options: { loader: "jsx" }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.svg$/,
        use: [ "@svgr/webpack" ]
      }
    ]
  },
  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../static"),
          to: path.resolve(__dirname, "../dist")
        }
      ]
    }),
    new HtmlWebPackPlugin({
      publicPath: process.env.PUBLIC_PATH,
      template: path.resolve(__dirname, "../src/index.html")
    }),
    new ESBuildPlugin(),
    new ReactRefreshWebpackPlugin()
  ]
}
