const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './frontend/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Define onde e com qual nome o arquivo CSS extraído será salvo
      filename: '../css/style.css', 
    }),
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage', // Carrega apenas os polyfills utilizados
                  corejs: 3,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        // Substituído 'style-loader' pelo MiniCssExtractPlugin.loader
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
};