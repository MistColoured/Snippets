const path = require('path');

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: 'bundle.js'
    },
    mode: 'development',
    resolve: {
        extensions: [
            '*', '.js', '.jsx', '.json'
        ]
        // alias: {
        //     MyFiles: path.resolve(__dirname, 'src/')
        // }
    },
    module: {
        // configuration regarding modules
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                // these are matching conditions, each accepting a regular expression or string
                // test and include have the same behavior, both must be matched
                // exclude must not be matched (takes preferrence over test and include)
                // Best practices:
                // - Use RegExp only in test and for filename matching
                // - Use arrays of absolute paths in include and exclude
                // - Try to avoid exclude and prefer include
                loader: 'babel-loader'
                // the loader which should be applied, it'll be resolved relative to the context
                // -loader suffix is no longer optional in webpack2 for clarity reasons
                // see webpack 1 upgrade guide
                // options: {
                //     presets: ["es2015"]
                // },
                // options for the loader
            }
        ]
    },
    // lets you precisely control what bundle information gets displayed
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        hot: true,
        stats: "minimal",
        port: 8080
    }
}