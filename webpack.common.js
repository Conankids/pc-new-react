
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var LessPluginFunctions = require('less-plugin-functions');

module.exports = {

    entry:{
        main: __dirname +'/src/index.js',
        vendors:[
          'react',
          'react-dom'
        ],
	    ueditor:[
		    './src/components/UEditor/index.js'
	    ]
    },
    output: {
        //打包相关
        path: path.resolve(__dirname,"dist"),
        filename: '[name].[hash:8].js',
        //浏览器获取资源相关
        publicPath:"dist",
    },
    resolve: {
        extensions: ['.vue','.js', '.json', '.less','.css']
    },
    module: {
        loaders: [
            {
              test: /\.js[x]?$/,
              use: {
                loader: 'babel-loader',
                options: {
                  "presets": [
                    ['es2015', {modules: false}]
                  ],
                }
              },
              exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                      {
                        loader: 'css-loader',
                        options:{
                          minimize: true //css压缩
                        }
                      },
                      {
                        loader: "autoprefixer-loader"
                      }
                    ]
                })
            },
            {
              test: /\.sass$/,
              loader: ExtractTextPlugin.extract({
                fallback:"style-loader",
                use:[{
                  loader: 'css-loader',
                  options:{
                    minimize: true //css压缩
                  }
                }, {
                  loader: "autoprefixer-loader"
                }, {
                  loader: "sass-loader",
                  options: {
                    plugins: [
                      new LessPluginFunctions()
                    ]
                  }
                }]
              })
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                      loader: 'css-loader',
                      options:{
                        minimize: true //css压缩
                      }
                    }, {
                      loader: "autoprefixer-loader"
                    }, {
                      loader: "less-loader",
                      options: {
                        plugins: [
                          new LessPluginFunctions()
                        ]
                      }
                    }]
                })
            },
            {
                test: /\.(html|php)$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|swf)$/,
                loader: 'url-loader?limit=1&name=[hash:8].[name].[ext]&publicPath=../&outputPath=images/',
            },
            {
                test: /\.(mp4|ogg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendors',
            filename:'vendors.[hash:8].js'
        }),
        new ExtractTextPlugin("style/[name].[hash:8].css"),
    ]
}

