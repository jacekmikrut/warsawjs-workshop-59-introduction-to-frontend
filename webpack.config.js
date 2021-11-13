const path = require('path');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
      }
    ],
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js'],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html' }),
    new ESLintWebpackPlugin({ extensions: ['js'] }),
    new MiniCSSExtractPlugin(),
  ],
  devServer: {
    static: './dist',
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
};
