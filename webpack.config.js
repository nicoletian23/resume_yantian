const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',//development production
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=16940' },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2?)$/,
                loader: 'url-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: __dirname + 'node_modules',
                include: __dirname + 'src',
                query: {
                    presets: ["@babel/preset-env"],
                    plugins: ["@babel/transform-runtime"]
                }
            },
            { test: /\.vue$/, use: 'vue-loader' },
        ]
    },
    devServer: {
        open: true,
        port: 8080,
        host: '127.0.0.1',
    }
}