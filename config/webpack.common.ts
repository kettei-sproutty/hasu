import { Configuration } from 'webpack'
import { OUTPUT_PATH } from './paths'
import rules from './rules'
import plugins from './plugins'

const webpackCommonConfig: Configuration = {
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules
  },
  output: {
    filename: '[name].js',
    clean: true,
    path: OUTPUT_PATH,
  },
  plugins,
}

export default webpackCommonConfig
