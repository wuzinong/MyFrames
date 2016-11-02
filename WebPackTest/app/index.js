

import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './component';
import List from './List';

class HelloReact extends React.Component{
	 render(){
	 	 return (
	 	 	<div>Hello React
	 	 		<Comp/>
	 	 		<List/>
	 	 	</div>
	 	 	)
	 }
}
ReactDOM.render(<HelloReact/>,document.body);