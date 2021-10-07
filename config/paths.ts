import path from 'path'

const ROOT_PATH = path.join(__dirname, '..')
const SOURCE_PATH = path.join(ROOT_PATH, 'src')
const OUTPUT_PATH = path.join(ROOT_PATH, 'dist')
const NODE_MODULES_PATH = path.join(ROOT_PATH, 'node_modules')

const PUBLIC_PATH = '/assets/'

export { ROOT_PATH, SOURCE_PATH, OUTPUT_PATH, PUBLIC_PATH, NODE_MODULES_PATH }