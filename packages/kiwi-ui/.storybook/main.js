module.exports = {
  stories: ["../src/**/*.stories.js"],
  // https://stackoverflow.com/a/61706308
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"))
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack")
    })

    return config
  }
}
