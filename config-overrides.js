module.exports = function override(config, env) {
    config.output.filename = 'bundle.js'

    config.optimization.runtimeChunk = false
    config.optimization.splitChunks = false

    return config
}
