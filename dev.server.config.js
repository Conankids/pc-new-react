var common = require('./webpack.common');

common.devtool = '#cheap-module-source-map';

common.devServer = {
	historyApiFallback: true,
	hot: true,
	inline: true,
	contentBase: "./dist", //最好写上，否则报错，难道这里是一个坑？
	port: 8080,
	setup(app) {  //模拟数据
		app.get('/getJSON', function (req, res) {
			res.json(
				{
					"success": "true",
					"resultCode": "0",
					"errorMsg": "\u64cd\u4f5c\u6210\u529f",
					"result": [{
						"id": "6",
						"uid": "1350026",
						"status": "0",
						"img": "c05984f8-d6b2-45b9-8df8-d9084c235021",
						"addtime": "2017-09-15 12:07:01"
					}, {
						"id": "5",
						"uid": "1350026",
						"status": "0",
						"img": "b2c18f1e-629c-43e9-9108-799a2528e53c",
						"addtime": "2017-09-15 12:07:01"
					}, {
						"id": "4",
						"uid": "1350026",
						"status": "0",
						"img": "c445adae-7f99-4e54-9adb-85481e09a440",
						"addtime": "2017-09-15 12:06:08"
					}, {
						"id": "3",
						"uid": "1350026",
						"status": "0",
						"img": "c445adae-7f99-4e54-9adb-85481e09a440",
						"addtime": "2017-09-15 12:05:52"
					}, {
						"id": "2",
						"uid": "1350026",
						"status": "0",
						"img": "b23aaf7d-4287-4f5d-b8db-cf32896d8102",
						"addtime": "2017-09-15 11:42:51"
					}],
					"limit": 0
				}
			);
		});
	},
	proxy: {
		'/api': {
			target: 'http://www.jiguo.com',
			secure: true,
			changeOrigin: true
		},
		'/article': {
			target: 'http://www.jiguo.com',
			secure: true,
			changeOrigin: true
		},
		'/user': {
			target: 'http://www.jiguo.com',
			secure: true,
			changeOrigin: true
		},
		'/UEditor/php': {
			target: 'http://www.jiguo.com',
			secure: true,
			pathRewrite: {
				'^/UEditor/php': '/protected/extensions/ueditor/php'
			},
			changeOrigin: true
		}
	}
};

common.output.publicPath = '';

module.exports = common;




