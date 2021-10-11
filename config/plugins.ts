import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import WebExtPlugin from 'web-ext-plugin'
import Dotenv from 'dotenv-webpack'
import ESLintPlugin from 'eslint-webpack-plugin'
import WorkboxPlugin from 'workbox-webpack-plugin'
import { NODE_MODULES_PATH, SOURCE_PATH, ROOT_PATH, OUTPUT_PATH } from './paths'

const dotenv = new Dotenv({
  path: path.join(ROOT_PATH, '.env'),
})

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(SOURCE_PATH, 'index.html'),
})

const cleanPlugin = new CleanWebpackPlugin()

const miniCssPlugin = new MiniCssExtractPlugin({
  filename: 'styles/[name].[contenthash].css',
  chunkFilename: 'styles/[id].[contenthash].css',
})

const copyWebpackPublic = new CopyPlugin({
  patterns: [
    {
      from: path.join(NODE_MODULES_PATH, 'webextension-polyfill', 'dist', 'browser-polyfill.js'),
    },
    {
      from: path.join(SOURCE_PATH, 'manifest.json'),
      to: OUTPUT_PATH
    },
    {
      from: path.join(SOURCE_PATH, 'public', 'locales'),
      to: path.join(OUTPUT_PATH, 'public', 'locales'),

    }
  ],
})

const webExtPlugin = new WebExtPlugin({
  browserConsole: true,
  target: 'chromium',
  sourceDir: OUTPUT_PATH,
})

const eslintPlugin = new ESLintPlugin({
  fix: true
})

const workboxPlugin = new WorkboxPlugin.GenerateSW({
  clientsClaim: true,
  skipWaiting: true,
})

const plugins = [
  dotenv,
  htmlPlugin,
  cleanPlugin,
  miniCssPlugin,
  copyWebpackPublic,
  webExtPlugin,
  workboxPlugin,
  eslintPlugin
]

export default plugins
