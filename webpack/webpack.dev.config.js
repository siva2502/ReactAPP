var webpack = require('webpack');
const path = require('path');
var parentDir = path.join(__dirname, '../');

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
},
  module: {
    rules: [{
      test: /\.js$/, // include .js files
      enforce: "pre", // preload the jshint loader
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loaders: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loder", "less-loader"]
            }
        ],
        options: {
          camelcase: true,
          emitErrors: false,
          failOnHint: false
        }
      }]
    }]
  },

};

