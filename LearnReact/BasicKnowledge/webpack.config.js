var path = require('path');
var webpack = require('webpack');

var pathToReact = path.join(__dirname, "./node_modules/react/dist/react.js");
var pathToReactDOM = path.join(__dirname, "./node_modules/react-dom/dist/react-dom.js");

var HtmlWebpackPlugin = require('html-webpack-plugin');

var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');

//css文件单独加载
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//区分环境标识 Environment flags 
var definePlugin = new webpack.DefinePlugin({
	__DEV__:JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
	__PRERELEASE__:JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});





//npm run dev

//Mock数据
// function rewriteUrl(replacePath) {
//   return function (req, opt) {
//     var queryIndex = req.url.indexOf('?');
//     var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";

//     req.url = req.path.replace(opt.path, replacePath) + query;
//     console.log("rewriting ", req.originalUrl, req.url);
//   };
// }

module.exports = {
	// entry:{//配置多文件入口
	//   entry1:'./src/entry1.js',
	//   entry2:'./src/entry2.js'
	// },
	entry: {
		 index: [
		    'webpack/hot/dev-server',
		    'webpack-dev-server/client?http://localhost:8080',
		    path.resolve(__dirname, 'src/index.js')
		  ],
		  vendor: ['react', 'react-dom']//提取第三方插件代码
    },
	output:{
		 path:path.resolve(__dirname,'build'),
		 filename:'bundle.js?[hash]'  //添加hash防止缓存
	},
	devServer:{
		publicPath:'/static/',
		stats:{colors:true},
		port:8080,
		contentBase:'src',
		inline:true
	},
	resolve:{
		//extension 不用在require或是import的时候加文件后缀
	   extensions:["",".js",".jsx",".css",".json"],
	   alias:{
	   	  "react":pathToReact,
	   	  "react-dom":pathToReactDOM
	   }
	},
	//我们在配置中新增devtool字段，并设置值为source-map，
	//这样我们就可以在浏览器中直接调试我们的源码，在控制台的sources下，
	//点开可以看到webpack://目录，点开有惊喜哦。
	devtool:'cheap-module-source-map',
	module:{
		loaders:[
		   {
		   	 test:/\.js$/,
		   	 loader:'babel-loader'
		   },
		   {
		   	 test:/\.css/,
		   	 loader:'style!css'
		   },
		   {
		   	 test:/\.less$/,
		   	 loader: 'style!css!less'
		   },
		   {
		   	//图标字体的加载可以选择file-loader 或 url-loader 进行加载，配置如下
		   	 test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
		   	 loader: "url?limit=10000"
		   }
		],
		noParth:[pathToReact,pathToReactDOM]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin("bundle.css"),
		new HtmlWebpackPlugin({
			 title:'test-react',
			 template:'./src/index.html'
		}),
		new openBrowserWebpackPlugin({url:'http://localhost:8080'}),//自动打开浏览器
		//修改webpack配置中的entry入口，并且添加CommonsChunkPlugin插件抽取出第三方资源。
		 new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
		definePlugin
	]
}