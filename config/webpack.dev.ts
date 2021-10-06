import path from "path"
import { Configuration } from "webpack"
import { merge } from 'webpack-merge'
import { SOURCE_PATH } from "./paths"

import webpackCommonConfig from "./webpack.common"

const webpackDevConfig: Configuration = merge(webpackCommonConfig, {
    entry: {
        app: path.join(SOURCE_PATH, 'dev.tsx'),
    },
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
})

export default webpackDevConfig
