import { Configuration } from 'webpack'
import { OUTPUT_PATH } from './paths'
import rules from './rules'
import plugins from './plugins'
import path from 'path'
import { SOURCE_PATH } from './paths'

const webpackCommonConfig: Configuration = {
  entry: {
    app: path.join(SOURCE_PATH, '_app.tsx'),
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules,
  },
  output: {
    filename: '[name].js',
    clean: true,
    path: OUTPUT_PATH,
  },
  plugins,
}

export default webpackCommonConfig
