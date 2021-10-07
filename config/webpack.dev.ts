import { Configuration } from "webpack"
import { merge } from 'webpack-merge'

import webpackCommonConfig from "./webpack.common"

const webpackDevConfig: Configuration = merge(webpackCommonConfig, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
})

export default webpackDevConfig
