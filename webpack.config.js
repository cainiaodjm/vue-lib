// const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  mode: "development",
  entry: {
    index: "./src/main.js",
    // print: "./src/print.js",
    // another: "./src/another-module.js",
  },
  output: {
    // filename: "[name].bundle.js",
    // path: path.resolve(__dirname, "dist"),
    // clean: true,
    // assetModuleFilename: "static/[name][hash:7][ext]",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.(jsx?|babel|es6)$/,
        // include: process.cwd(),
        // exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.s[ac]ss$/i,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./index.html",
    }),
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
  ],
}
