const VueLoaderPlugin = require('vue-loader/lib/plugin');
const glob = require('glob');
const path = require('path');

const entries = {};
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
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}