var webpackConfigBase = require('./webpack.config.base');

module.exports = Object.assign(webpackConfigBase, {
  entry: './src/index',
  output: {
    // path: './dist',
    path: './lib',
    filename: 'react-bootstrap-typeahead.js',
    library: 'ReactBootstrapTypeahead',
    libraryTarget: 'umd'
  },
  externals: [{
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }, {
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }],
});
