import React,{PropTypes,Component} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Login from '../Components/login'


class Roots extends Component{
	  render(){
	  	 return (
	  	 	<div>
	  	 		{this.props.children}
	  	 	</div>
	  	 )
	  }
}
const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const List = (location,cb)=>{
	 require.ensure([],require =>{
	 	  cb(null, require('../Pages/ListPage').default)
	 },'List')
}
 
const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={Login} />
            <Route path="index" component={Login} />
            <Route path="List" getComponent={List} />
            <Redirect from='*' to='/' />
        </Route>
    </Router>
);



export default RouteConfig