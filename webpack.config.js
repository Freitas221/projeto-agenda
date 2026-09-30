const path = require('path') //CommonJS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './frontend/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    plugins: [new MiniCssExtractPlugin()],

    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                },
            },
        }, {
            test: /\.css$/,
            use:['style-loader', 'css-loader']
        }],
    },
    devtool: 'source-map'    
}