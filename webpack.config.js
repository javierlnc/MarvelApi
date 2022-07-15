const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
        {
            inject:true,
            template:'./Public/index.html',
            filename:'index.html'
        }
    ),
  ]
}