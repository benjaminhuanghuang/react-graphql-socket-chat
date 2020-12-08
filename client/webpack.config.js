const path = require("path");
// create html refering the bundle.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 3721,
    headers: {
      "Access-Control-Allow-Origin": "*",
      https: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};

module.exports = config;
