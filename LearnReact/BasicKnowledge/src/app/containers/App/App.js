import React,{Component} from 'react';
import './App.less';

class App extends Component{
	constructor(props){
		super(props);
	}
	render(){
	   return (
	   	  <div>
	   	      <h1>content from App Component</h1>
	   	      {this.props.children}
	   	  </div>
	   	)
	}
}
export default App;