module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:8000",
                changeOrign: true
            }
        }
    }, 
    publicPath: '/platform/static'

}