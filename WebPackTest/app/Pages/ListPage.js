import React,{PropTypes,Component} from 'react';
import ReactDom from 'react-dom';
import List from '../Components/list'

class ListPage extends Component{
	constructor(props){
		super(props);

	}
	render(){
	  return(
	  	<List/>
	  )
	}
}

export default ListPage