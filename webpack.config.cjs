const fs = require('fs');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const buildPath = path.resolve(__dirname, 'dist');

const assets = fs.readdirSync('src/assets/').map((filename) => {
  return `"/assets/${filename}"`;
});

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  target: 'browserslist',
  output: {
    path: buildPath,
    filename: 'index.js',
    libraryTarget: 'umd',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        use: 'babel-loader',
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new CopyWebpackPlugin({ patterns: [{ from: 'src/assets', to: 'assets' }] }),
  ],

  resolve: {
    extensions: ['.js'],
  },
};
