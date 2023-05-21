const path = require('path')

const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    entry: "./app/index.ts",
    output: {
        path: path.resolve(__dirname, "distW"),
        filename: "bundle.js",
        // 输出的时候不带箭头函数
        environment: {
            arrowFunction: false
        }
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    "ts-loader",
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [[
                                // 插件
                                "@babel/preset-env",
                                // 配置
                                {
                                    // 要兼容的目标浏览器
                                    targets: {
                                        "chrome": "58",
                                        "ie": "8"
                                    },
                                    // core的版本
                                    "corejs": "3",
                                    // 按需使用
                                    "useBuiltIns": "usage"
                                }
                            ]]
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },

    // 指定需要的插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 指定标题
            // title: "测试标题"
            // 可以直接指定模板
            template: "./app/index.html"
        })
    ],

    resolve: {
        extensions: [".ts", ".js"]
    }
}