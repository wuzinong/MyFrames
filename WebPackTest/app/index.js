
import React from 'react';
import ReactDOM from 'react-dom';
import route from './Router/Route'; //路由配置
import './less/base.less';

// class HelloReact extends React.Component{
// 	 render(){
// 	 	 return (
// 	 	 	<div>
// 	 	 		<Login/>
// 	 	 	</div>
// 	 	 	)
// 	 }
// }

	ReactDOM.render(<div>{route}</div>,document.getElementById("container"));