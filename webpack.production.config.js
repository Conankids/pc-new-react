var path = require('path');
var webpack = require('webpack');
var common = require('./webpack.common');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var v = 'v1.0.0';

common.output.path = path.join('/Users/mingchao/Desktop/本地文件/jiguozhidx/jiguo-dev/cdn/static@2.0/pc/', v);

common.output.publicPath = '//cdn.jiguo.com/static@2.0/pc/' + v + '/';
common.module.loaders.forEach((item, index) => {
	if (item.loader && item.loader.indexOf('publicPath=../&outputPath=images/') > -1) {
		common.module.loaders[index].loader = [
			{
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: '[hash:8].[name].[ext]',
					publicPath: common.output.publicPath,
					outputPath: 'images/',
				}
			}
		];
	}
});


common.plugins = [
	...common.plugins,

	// 配置环境变量到Production，防止控制台警告
	new webpack.DefinePlugin({
		"process.env": {
			NODE_ENV: JSON.stringify("production")
		}
	}),
	//优化压缩
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		},
		//这里的soucemap 不能少，可以在线上生成soucemap文件，便于调试
		// sourceMap: true,
		// mangle: true
	}),
	// new webpack.SourceMapDevToolPlugin({
	//     filename: '[name].js.map',
	//     exclude: ['vendor.js']
	// })
	new HtmlWebpackPlugin({
		template: 'src/indexTpl/index.ejs.js',
		filename: '/Users/mingchao/Desktop/本地文件/jiguozhidx/jiguo-dev/jiguo/protected/views/user/post.php',
		minify: { //压缩HTML文件
			collapseWhitespace: true, //删除空白符与换行符
			removeAttributeQuotes: false,
			removeComments: true,
			removeEmptyAttributes: false,
			inject: 'body',
		},
		chunksSortMode: function (a, b) {
			if (a.names == 'manifest') {
				return -1
			}
			if (b.names == 'manifest') {
				return 1
			}
			if (a.names == 'vendor') {
				if (b.names != 'manifest') {
					return -1
				} else {
					return 1
				}
			}
			if (b.names == 'vendor') {
				if (a.names != 'manifest') {
					return 1
				} else {
					return -1
				}
			}
			return a.names[0] > b.names[0] ? 1 : -1;
		}
	}),
	new CopyWebpackPlugin([{
		from: __dirname + '/src/components/UEditor',
		to: '/Users/mingchao/Desktop/本地文件/jiguozhidx/jiguo-dev/cdn/static@2.0/pc/UEditor'
	}])
];

var rm = require('rimraf')
rm(common.output.path, err => {
	if (err) throw err
})

module.exports = common;






