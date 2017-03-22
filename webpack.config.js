var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	devtool: 'source-map',
	entry: {bundle: ['./app/component/a.js', 'webpack-hot-middleware/client?reload=true']},
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: 'http://127.0.0.1:3000/',
		filename: '[name].js'
	},
	module: {
		rules:[
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets:['es2015','stage-3']
				}
			},
			{
				test: /\.vue$/,
				use:['vue-loader']
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			inject: true,
			hot: true,
			excludeChunks: []
		}),
		new webpack.HotModuleReplacementPlugin()

	],
	stats: {
		colors: true,
		modules: false,
		chunks: false
	}
}
