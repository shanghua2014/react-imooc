var webpack = require('webpack');
var path = require('path');

module.exports = {
    context:__dirname + '/src',
    entry: "./js/index.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs'], //添加组件的插件配置
                }
            },
            //下面是使用 ant-design 的配置文件
            { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'
            }
        ]
    },
    output: {
        path: __dirname,
        filename: "./src/bundle.js"
    }
};
