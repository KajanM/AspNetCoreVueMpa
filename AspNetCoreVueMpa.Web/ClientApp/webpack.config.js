const VueLoaderPlugin = require('vue-loader/lib/plugin');
const glob = require('glob');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entries = {};
entries['styles'] = path.join(__dirname, 'assets/styles/styles.scss');

const IGNORE_PATHS = ['unused'];

glob.sync('./views/**/main.js').forEach(path => {
  const chunk = path.split('./views/')[1].split('/main.js')[0]
  if (IGNORE_PATHS.every(path => !chunk.includes(path))) {
    if (!chunk.includes('/')) {
      entries[chunk] = path
    } else {
      const joinChunk = chunk.split('/').join('-')
      entries[joinChunk] = path
    }
  }
});

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../wwwroot'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: [
          path.join(__dirname, 'assets/styles/styles.scss'),
        ],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        exclude: [
          path.join(__dirname, 'assets/styles/styles.scss')
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.css'
    }),
  ]
}