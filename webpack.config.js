const path = require('path')

module.exports = {
  entry: {
    bundle: ['./src/index.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.join(__dirname, 'node_modules')]
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
}
