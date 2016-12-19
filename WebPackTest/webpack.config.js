
var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin =require('html-webpack-plugin');

 
//npm start

var config = {
	 entry:[
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
		        test: /\.(css|less)$/,
		        loaders: ['style', 'css', 'less'],
		        include: path.resolve(__dirname, 'app')
		     },
		     {
		     	test:/\.jsx?$/,
		     	loader:'babel',
		     	exclude:/node_modules/,
		     	query:{
		     		presets:['react','es2015'],
		     		plugins:[
		     		  ['import',{
		     		  	libraryName:'antd',
		     		  	style:'css',
		     		  }]
		     		]
		     	}
		     }
	 	]
	 },
	 plugins:[
	 	new HtmlwebpackPlugin({
	 		title:'React',
	 		template:'./template/index.html'
	 	})
	 ],
	 devServer:{
	 	 historyApiFallback:true,
	 	 hot:true,
	 	 inline:true,
	 	 progress:true,
	 	 port:3000
	 }
}

module.exports = config;