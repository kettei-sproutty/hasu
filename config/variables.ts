type NodeEnvType = 'development' | 'production' | 'none' | undefined

const NODE_ENV = (process.env['NODE_ENV'] as NodeEnvType) || 'development'

export { NODE_ENV }
