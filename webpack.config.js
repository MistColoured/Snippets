const PATH = require('path');

module.exports = {
  entry: './Practice/app.jsx',
  output: {
    filename: 'bundle.js',
  },
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    // alias: {
    //     MyFiles: PATH.resolve(__dirname, 'src/')
    // }
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        exclude: [PATH.resolve(__dirname, 'node_modules')],
        // these are matching conditions, each accepting a regular expression or string
        // test and include have the same behavior, both must be matched
        // exclude must not be matched (takes preferrence over test and include)
        // Best practices:
        // - Use RegExp only in test and for filename matching
        // - Use arrays of absolute PATHs in include and exclude
        // - Try to avoid exclude and prefer include
        loader: 'babel-loader',
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide
        // options: {
        //     presets: ["es2015"]
        // },
        // options for the loader
      },
    ],
  },
  devServer: {
    // Tell the server where to serve content from. This is only necessary if you want to serve static files.  
    contentBase: PATH.join(__dirname, 'public'),
    // Enable gzip compression for everything served
    compress: true,
    // Enable webpack's Hot Module Replacement feature
    hot: true,
    // This option lets you precisely control what bundle information gets displayed. This can be a nice middle ground if you want some bundle information, but not all of it.
    stats: 'minimal',
    port: 8080,
  },
};
