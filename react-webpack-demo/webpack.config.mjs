import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  mode: "production",
  entry: {
    path: "./src/main.js",
  },
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [
          process.env.NODE_ENV === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-react",
              {
                runtime: "automatic",
              },
            ],
          ],
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
