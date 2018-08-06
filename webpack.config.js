const path = require('path');

module.exports = {
  entry: './src',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: path.join(__dirname, '.babelrc'),
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'browser-easing.js',
    library: 'Easing',
    libraryTarget: 'umd',
  },
};
