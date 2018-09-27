const path = require('path')

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: {
    index: './static/js/index.js',
    getPsword: './static/js/getPsword.js'
  },
  output: {
    path: path.resolve(__dirname, './builds'),
    filename: 'js/[name].[hash:8].js',
    publicPath: './',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: ('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: ('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}