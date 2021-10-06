import { Configuration, RuleSetRule } from 'webpack'
import path from 'path'
import sass from 'sass'
import HtmlPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

const SOURCE_PATH = path.join(__dirname, '..', 'src')
const OUTPUT_PATH = path.join(__dirname, '..', 'dist')
const PUBLIC_PATH = '/'

const ENV = (process.env['NODE_ENV'] as Configuration['mode']) || 'development'

const typescriptRule: RuleSetRule = {
  test: /\.(tsx|ts)$/i,
  use: 'ts-loader',
  exclude: new RegExp('node_modules'),
}

const sassRule: RuleSetRule = {
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    { loader: 'css-loader', options: { importLoaders: 1 } },
    { loader: 'postcss-loader' },
    {
      loader: 'sass-loader',
      options: {
        implementation: sass,
      },
    },
  ],
}

const fileRule: RuleSetRule = {
  rules: [
    {
      test: /\.(png|jpe?g|gif|webp|svg)$/i,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: PUBLIC_PATH,
      },
    },
  ],
}

const htmlPlugin = new HtmlPlugin({
  template: path.join(SOURCE_PATH, 'public', 'index.html'),
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
      filter: resourcePath => resourcePath.includes('webp')
    }
  ]
})

const webpackConfig: Configuration = {
  mode: ENV,
  entry: {
    app: path.join(SOURCE_PATH, 'index.tsx'),
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [typescriptRule, sassRule, fileRule],
  },
  output: {
    filename: '[name].js',
    clean: true,
    path: OUTPUT_PATH,
  },
  plugins: [htmlPlugin, cleanPlugin, miniCssPlugin, copyWebpackPublic],
  devtool: ENV === 'development' ? 'eval-cheap-module-source-map' : false,
}

export default webpackConfig
