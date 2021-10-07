import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import { NODE_MODULES_PATH, OUTPUT_PATH, SOURCE_PATH } from './paths'

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(SOURCE_PATH, 'index.html'),
})

const cleanPlugin = new CleanWebpackPlugin()

const miniCssPlugin = new MiniCssExtractPlugin({
  filename: 'styles/[name].[contenthash].css',
  chunkFilename: '[id].[contenthash].css',
})

const copyWebpackPublic = new CopyPlugin({
  patterns: [
    {
      from: path.join(SOURCE_PATH, 'public'),
      to: path.join(OUTPUT_PATH, 'assets'),
      filter: (resourcePath) => resourcePath.includes('webp'),
    },
    {
      from: path.join(NODE_MODULES_PATH, 'webextension-polyfill', 'dist', 'browser-polyfill.js')
    }
  ],
})

const plugins = [htmlPlugin, cleanPlugin, miniCssPlugin, copyWebpackPublic]

export default plugins
