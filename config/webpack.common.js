const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");

/*mode -> Sets process.env.NODE_ENV on DefinePlugin to value development. Enables useful names for modules and chunks.
    El name se cambia para que al trabajar en producción siempre se recoja la información acerca de la última versión en caché y sea más liviano, es indispensable.
    El publickPath es el mismo.
*/

/** @type {import('webpack').Configuration} */

const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'
);

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  resolve: {
    extensions: [".js", ".jsx",".ts", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        type: 'asset/resource',
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        parser: {
          dataUrlCondition: {
            maxSize: imageInlineSizeLimit,
          },
        },
      },
      {
        type: 'asset/inline',
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./style.css",
    }),
  ],
};