/** @typedef {import('webpack').Configuration} WebpackConfig **/
export default {
  mode: "none",
  entry: {
    path: "./src/main.js",
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
};
