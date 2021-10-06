import path from 'path'
import HtmlPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import sass from 'sass'
import { Configuration, RuleSetRule } from 'webpack'

const SOURCE_PATH = path.join(__dirname, '..', 'src')
const OUTPUT_PATH = path.join(__dirname, '..', 'dist')

const ENV = (process.env['NODE_ENV'] as Configuration['mode']) || 'development'

const typescriptRule: RuleSetRule = {
  test: new RegExp('.tsx'),
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



const htmlPlugin = new HtmlPlugin({
  template: path.join(SOURCE_PATH, 'public', 'index.html'),
})

const cleanPlugin = new CleanWebpackPlugin()

const miniCssPlugin = new MiniCssExtractPlugin({
  filename: 'styles/[name].[contenthash].css',
  chunkFilename: '[id].[contenthash].css',
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
    rules: [typescriptRule, sassRule],
  },
  output: {
    filename: '[name].js',
    path: OUTPUT_PATH,
  },
  plugins: [htmlPlugin, cleanPlugin, miniCssPlugin],
  devtool: ENV === 'development' ? 'eval-cheap-module-source-map' : false,
}

export default webpackConfig
