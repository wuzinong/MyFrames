
import React,{Component} from 'react';

class Button extends Component{
	 handleClick(){
	 	 console.log("button clicked");
	 }
	 render(){
	 	 const style = require('./Button.less');

	 	 return (
	 	 	<button className="my-button" onClick={this.handleClick.bind(this)}>
	 	 	   Click Me
	 	 	</button>
	 	 )
	 }
}

export default Button;