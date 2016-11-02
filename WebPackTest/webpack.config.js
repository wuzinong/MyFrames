
var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin =require('html-webpack-plugin');

var config = {
	 entry:[ 
	    'webpack/hot/dev-server',
	    'webpack-dev-server/client?http://localhost:3000',
	    './app/index.js'
	 ],
	 output:{
	 	path:path.resolve(__dirname,'dist'),
	 	filename:'bundle.js'
	 },
	 module:{
	 	loaders:[
	 	   //{test:/\.js$/,loaders:[babel],exclude:/node_modules/}
	 	    {
		        test: /\.less$/,
		        loaders: ['style', 'css', 'less'],
		        include: path.resolve(__dirname, 'app')
		     },
		     {
		     	test:/\.jsx?$/,
		     	loader:'babel',
		     	exclude:/node_modules/,
		     	query:{
		     		presets:['react','es2015']
		     	}
		     }
	 	]
	 },
	 plugins:[
	 	new HtmlwebpackPlugin({
	 		title:'React ddd'
	 	})
	 ]
}

module.exports = config;