const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://jingzhidao.top", // 目标路径
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        })
    )
}