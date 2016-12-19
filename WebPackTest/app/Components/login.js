import React,{PropTypes,Component} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';


import '../less/login.less';
class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			userName:"Tom",
			pwd:"123456",
			ifRisk:false
		}
		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	 _handleChange(event){
	 	 let val = event.target.value;
	 	 if(val === ""){
	 	 	this.setState({
	 	 		[event.target.name]:event.target.value
	 	 	});
	 	 	event.target.classList.add("warning");
	 	 }else{
	 	 	this.setState({
	 	 		[event.target.name]:event.target.value
	 	 	});
	 	 	event.target.classList.remove("warning");
	 	 }
      }



     _handleSubmit(event){
     	var userName = this.refs.userName.value;
     	var pwd = this.refs.pwd.value;
     	console.log(userName+"-"+pwd);
     	if(userName && pwd){
     		alert("登录成功");
     	}else{
     		alert("请输入用户名密码");
     	}
    }
	render(){
		const {userName,pwd} = this.state;
		return (
			<div className="logForm">
				<from action="">
				    <dl>
				        <dt>用户名:</dt>
				        <dd><input ref="userName" name="userName" type="text" value={userName} onChange={this._handleChange}/></dd>
				    </dl>
				    <dl>
				        <dt>密码:</dt>
				        <dd><input ref="pwd" name="pwd" type="password" value={pwd} onChange={this._handleChange}/></dd>
				    </dl>
				    <button onClick={this._handleSubmit} className="ant-btn ant-btn-primary">登录</button>
				</from>
			</div>
		)
	}
}

 

export default Login