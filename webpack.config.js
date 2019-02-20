var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var tools = require('./tools');
var common = require('./webpack.common');
var dev_config = require('./dev.server.config');

common = tools.extend(common, dev_config);

common.plugins = [
	...common.plugins,
	new webpack.HotModuleReplacementPlugin(),
	new HtmlWebpackPlugin({
		template: 'src/indexTpl/index.ejs.js',
		favicon: './src/style/images/favicon.ico',
		filename: 'index.html',
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
			if(a.names[0] == b.names[0]){
				return a.names[1] > b.names[1] ? 1 : -1;
			}
			return a.names[0] > b.names[0] ? 1 : -1;
		}
	}),
	new CopyWebpackPlugin([{
		from: __dirname + '/src/components/UEditor',
		to: __dirname + '/dist/UEditor'
	}]),
];

module.exports = common;




