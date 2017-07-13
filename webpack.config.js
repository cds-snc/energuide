const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const uglify = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
  },
})

const setNodeEnv = env => {
  return new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(env),
    },
  })
}

const loaders = [
  {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      presets: ['env', 'react'],
      plugins: ['transform-class-properties'],
    },
  },
]

const clientConfig = (plugins, loaders) => {
  return {
    entry: './src/client.js',
    output: {
      path: __dirname + '/dist/public/',
      filename: 'bundle.js',
    },
    plugins,
    module: { loaders },
  }
}

const server = {
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: __dirname + '/dist/',
    filename: 'backend.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: { loaders },
}

module.exports = env => {
  console.log(env)
  if (env == 'production') {
    return [clientConfig([setNodeEnv(env), uglify], loaders), server]
  } else {
    return [clientConfig([setNodeEnv(env)], loaders), server]
  }
}
