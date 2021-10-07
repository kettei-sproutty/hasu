import { Configuration } from "webpack"
import { merge } from 'webpack-merge'

import webpackCommonConfig from "./webpack.common"

const webpackProdConfig: Configuration = merge(webpackCommonConfig, {
    mode: 'production',
    devtool: false,
})

export default webpackProdConfig
