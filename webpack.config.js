const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                // use: [{
                //     loader: 'babel-loader',
                //     options: { presets: ['es2015'] },
                // }],
            },

            // Loaders for other file types can go here
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': "'production'" }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
};