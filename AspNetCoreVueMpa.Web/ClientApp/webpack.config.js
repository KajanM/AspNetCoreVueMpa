const VueLoaderPlugin = require('vue-loader/lib/plugin');
const glob = require('glob');

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