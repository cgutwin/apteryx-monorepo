// development
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { ESBuildPlugin } = require('esbuild-loader')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].bundle.js",
    publicPath: "/"
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
      }
    ]
  },
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
    overlay: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    }),
    new ESBuildPlugin()
  ]
}
