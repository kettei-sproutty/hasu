import path from "path/posix"
import { Configuration } from "webpack"
import { merge } from 'webpack-merge'
import { SOURCE_PATH } from "./paths"

import webpackCommonConfig from "./webpack.common"

const webpackProdConfig: Configuration = merge(webpackCommonConfig, {
    entry: {
        app: path.join(SOURCE_PATH, 'prod.tsx'),
    },
    mode: 'production',
    devtool: false
})

export default webpackProdConfig
