var path = require('path')

var webpack = require('webpack')

var HtmlWebpackPlugin = require('html-webpack-plugin')

console.log(path.join(__dirname, 'src'))

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/loader.coffee'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      loader: "coffee-loader"
    }, {
      test: /\.(coffee\.md|litcoffee)$/,
      loader: "coffee-loader?literate"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.coffee'],
    root: [
      path.join(__dirname, 'src')
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'coffee choo'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
