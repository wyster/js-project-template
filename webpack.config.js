const path = require("path");
const JavaScriptObfuscator = require("webpack-obfuscator");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, params) => {
  const config = {
    devtool: "cheap-module-source-map",
    entry: {
      main: path.resolve(__dirname, "src/main.js")
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new CleanWebpackPlugin({ verbose: true }),
      new Dotenv()
    ],
  };

  if (params.mode === "production") {
    config.plugins.push(
      new JavaScriptObfuscator({
        rotateUnicodeArray: true,
      })
    );
  }

  return config;
};
