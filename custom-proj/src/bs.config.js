module.exports = {
    server: {
        base: 'dist',
        middleware: {
            1: require('connect-history-api-fallback')({ index: '/index.html', verbose: true })
        }
    }
}