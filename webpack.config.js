"use strict";//取消严格模式打包
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';

const config = {
    entry: path.join(__dirname, 'src/main.js'), // 入口文件 用path.join(__dirname, 'src/index.js')将路径拼接为绝对路径
    output: {
        filename: 'bundle.js', // 文件输出
        path: path.join(__dirname, '/dist')
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin({template: './src/index.html'}) // 处理html模版
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader' // 处理以.vue结尾的文件
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/, // 处理图片文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
               use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                        }
                    }
            },
        ]
    },
    watch:true
}
if(isDev){
    config.devtool = '#cheap-module-eval-source-map' // 调试代码时可以看到自己原本的代码，而不是编译后的
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true // 将webpack编译的错误显示在网页上面
        },
        open: true // 在启用webpack-dev-server时，自动打开浏览器
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}
module.exports = config;