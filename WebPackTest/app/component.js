
import React from 'react';
import ReactDOM from 'react-dom';
require('./index.less');

class Tips extends React.Component{

    constructor(){
    	super();
    	//this.ClickTip = ()=>{console.log("clicked");console.log(this);}
    	this.ClickTip = function(){
    		 console.log(this);
    	}.bind(this);
    }

    render(){
    	return (
    		<div className="tip" onClick={()=>this.ClickTip()}>
    		    this is a tip
    		</div>
    	)
    }
}

export default Tips;
