var path = require('path');

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');
var ngw = require('@ngtools/webpack');

module.exports = webpackMerge.smart(commonConfig, {
    entry: {
        'app': './src/app/components/chatroom/chatroom.aot.ts'
    },

    output: {
        path: path.resolve(__dirname + '/public/js/app'),
        filename: 'bundle.js',
        publicPath: '/',
        chunkFilename: '[id].[hash].chunk.js'
    },

    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    // 'angular-router-loader?aot=true'
                ]
            }
        ]
    },

    plugins: [
    new ngw.AngularCompilerPlugin({
      tsConfigPath: './tsconfig.serve.json',
      entryModule: './src/app/components/chatroom/chatroom.component#ChatroomComponent'
    }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        })
    ]
});