import { RuleSetRule } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import sass from 'sass'
import { PUBLIC_PATH } from './paths'
import path from 'path'

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
        outputPath: path.join(PUBLIC_PATH, 'images'),
      },
    },
  ],
}

const rules: RuleSetRule[] = [fileRule, typescriptRule, sassRule]

export default rules