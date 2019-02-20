var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var LessPluginFunctions = require('less-plugin-functions')

module.exports = {

    entry: {
        vendor: ['react', 'react-dom'],
        a1ueditor: './src/components/UEditor/index.js',
        a2main: __dirname + '/src/index.js',
    },
    output: {
        //打包相关
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
        //浏览器获取资源相关
        publicPath: 'dist',
    },
    // 减小模块的查找范围
    resolve: {
        extensions: ['.vue', '.js', '.json', '.less', '.css'],
        modules: [path.resolve(__dirname, 'node_modules')],
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        'presets': [
                            ['es2015', {modules: false}],
                        ],
                        cacheDirectory: './.webpack_cache/',
                    },
                },
                // 减少 babel 编译范围，忘记设置会让 webpack 编译慢上好几倍
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true //css压缩
                            },
                        },
                        {
                            loader: 'autoprefixer-loader',
                        },
                    ],
                }),
                exclude: /node_modules/,
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true //css压缩
                            },
                        }, {
                            loader: 'autoprefixer-loader',
                        }, {
                            loader: 'sass-loader',
                            options: {
                                plugins: [
                                    new LessPluginFunctions(),
                                ],
                            },
                        }],
                }),
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true //css压缩
                            },
                        }, {
                            loader: 'autoprefixer-loader',
                        }, {
                            loader: 'less-loader',
                            options: {
                                plugins: [
                                    new LessPluginFunctions(),
                                ],
                            },
                        }],
                }),
                exclude: /node_modules/,
            },
            {
                test: /\.(html|php)$/,
                loader: 'html-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|swf)$/,
                loader: 'url-loader?limit=1&name=[hash:8].[name].[ext]&publicPath=../&outputPath=images/',
                exclude: /node_modules/,
            },
            {
                test: /\.(mp4|ogg)$/,
                loader: 'file-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(ejs)$/,
                loader: 'extract-loader!html-loader!ejs-loader',
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[hash:8].js',
        }),
        new ExtractTextPlugin('style/[name].[hash:8].css'),
    ],
}

