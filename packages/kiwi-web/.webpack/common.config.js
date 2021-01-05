const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { ESBuildPlugin } = require("esbuild-loader")
const CopyPlugin = require("copy-webpack-plugin")
const Dotenv = require("dotenv-webpack")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "esbuild-loader",
        options: {
          loader: "jsx",
          target: "es2015"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    }),
    new ESBuildPlugin(),
    new CopyPlugin({
      patterns: [{ from: "public", to: "." }]
    }),
    new Dotenv()
  ]
}
