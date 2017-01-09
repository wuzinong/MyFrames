
import React,{Component} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import Button from '../components/Button/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './TestApp.less';

//styles
class StyleDemo extends Component{
	render(){
	   var MyComponentStyles = {
	   	   color:'blue',
	   	   fontSize:'28px'
	   };

	   return (
	   		<div style={MyComponentStyles}>

	   		</div>
	   )
	}
}

//state && setState
class StateDemo extends Component{
	state = {
	   secondsElapsed:0
	}
	tick(){
	   this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
	}
	componentDidMount(){
	   this.interval = setInterval(this.tick.bind(this),1000);
	}
	componentWillUnmount(){
	   clearInterval(this.interval);
	}
	 render(){
	    return (
	      <div>目前已经计时：{this.state.secondsElapsed}秒</div>
	    )
	  }
}

//  props
// 通过 this.props 可以获取传递给该组件的属性值，
// 还可以通过定义 getDefaultProps 来指定默认属性值
// （这是ES5的写法，ES6定义组件的默认props可以直接写props）

class PropsDemo extends Component{
	props = {
		title:"this is a default title value"
	}
	render(){
	   console.log(this.props);
	   return <b>{this.props.title}</b>
	}
}


// 4.1 组件初始定义
// getDefaultProps 得到默认属性对象，这个在ES6的时候不需要这样定义
// propTypes 属性检验规则
// mixins 组件间公用方法
// 4.2 初次创建组件时调用
// getInitialState 得到初始状态对象
// render 返回组件树. 必须设置
// componentDidMount 渲染到 dom 树中是调用，只在客户端调用，可用于获取原生节点
// 4.3 组件的属性值改变时调用
// componentWillReceiveProps 属性改变调用
// shouldComponentUpdate 判断是否需要重新渲染
// render 返回组件树. 必须设置
// componentDidUpdate 渲染到 dom 树中是调用, 可用于获取原生节点

class LifeCycleDemo extends Component{
   Props = {
   	  value:'开始渲染'
   }
   componentWillReceiveProps(nextProps){
   	  console.log('componentWillReceiveProps');
   	  this.setState({
   	  	 value:nextProps.value
   	  });
   }
   shouldComponentUpdate(nextProps,nextState){
   	  console.log("shouldComponentUpdate");
   	  return true;
   }
   componentWillUpdate(nextProps,nextState){
   	  console.log("componentWillUpdate")
   }
   componentWillMount(){
   	  console.log("componentWillMount");
   }
   render(){
   	  console.log("render");
   	  return <span>{this.props.value}</span>
   }
   componentDidMount(){
   	  console.log("componentDidMount");
   }
   componentDidUpdate(prevProps,prevState){
   	  console.log("componentDidUpdate");
   }
   componentWillUnmount(prevProps,prevState){
   	  console.log("componentWillUnmount");
   }
}

//调用组件并销毁组件示例
class DestroyComponent extends Component{
	state = {
		value:1,
		destroyed:false
	}
	increase = ()=>{
		this.setState({
			value:this.state.value +1
		});
	}
	destroy=()=>{
		this.setState({
			destroyed:true
		})
	}
	render(){
		if(this.state.destroyed){
			return null;
		}
		return (
		  <div>
			<p>
				<button onClick={this.increase}>每次加1</button>
				<button onClick={this.destroy}>干掉这个按钮</button>
			</p>
			<LifeCycleDemo value={this.state.value}/>
		  </div>
		)
	}
}

// # 创建-》渲染-》销毁

// getDefaultProps()
// getInitialState()
// componentWillMount()
// render()
// componentDidMount()
// componentWillUnmount()

// # 更新组件

// componentWillReceiveProps()
// shouldComponentUpdate()
// componentWillUpdate()
// render()
// componentDidUpdate()

//使用ref对操作DOM
class HandleDOMComponent extends Component{
	componentDidMount(){
		// 两种方式都可以获取到元素
	    let ele = findDOMNode(this.refs.content);
	    let ele2= this.refs.content;
	    // 如果想用 jquery，那么这是个好时机
	    console.log( ele );
	    console.log( ele.innerHTML );
	    console.log( ele2.innerHTML );
	}

	render(){
		return (
		  <div>
			<h3>Handle doms</h3>
			<div ref="content">content in the Dom element</div>
		  </div>
		)
	}
}


class Refs extends Component{
	state={
	  red:0,
	  green:0,
	  pink:0
	}
	update=(e)=>{
	  this.setState({
	  	 red:findDOMNode(this.refs.red).value,
	  	 green:findDOMNode(this.refs.green).value,
	  	 pink:findDOMNode(this.refs.pink).value
	  });
	}
	render(){
	   return (
		 <div>
		   <Slider ref="red" update={this.update}/>
		    {this.state.red}
		   <br/>
		   <Slider ref="green" update={this.update} />
	        {this.state.green}
	       <br />
	       <Slider ref="pink" update={this.update} />
	        {this.state.pink}
		 </div>
	   )
	}
}
class Slider extends Component{
	render(){
		return (
			<input type="range"
			       min="0"
			       max="255"
			       onChange={this.props.update}
			/>
		)
	}
}

// 可以通过设置原生 dom 组件的 onEventType 属性来监听 dom 事件，
// 例如 onClick, onMouseDown，
// 在加强组件内聚性的同时，避免了传统 html 的全局变量污染
class HandleEvent extends Component{
	state = {
	   liked:false
	}
	handleClick = (event)=>{
	   this.setState({liked:!this.state.liked})
	}
	render(){
		 let text = this.state.liked?"喜欢":"不喜欢";
		 return (
		  <div>
			 <p onClick={this.handleClick}>
			    我 {text} 你
			 </p>

			  <input type="text" value="Hello!" />
			   <input type="text" />;
		 </div>
		 )
	}
}

//使用自定义的组件
class ComponentA extends Component{
	render(){
		return (
		  <a href="#">我是组建A<br/></a>
		)
	}
}
class ComponentB extends Component{
	render(){
		return <a href="#">我是组件B</a>
	}
}
class SelfCreateComponent extends Component{
	render(){
	   return (
	   	   <i>
	   	      <ComponentA/>
	   	      <ComponentB/>
	   	   </i>
	   	)
	}
}

//组合CHILDREN
//自定义组件中可以通过 this.props.children 访问自定义组件的子节点
class ListComponent extends Component {
  render(){
    return <ul>
      {
        React.Children.map( this.props.children, function(c){
          return <li>{c}</li>;
        })
      }
    </ul>
  }
}

class UseChildrenComponent extends Component {
  render(){
    return (
      <ListComponent>
        <a href="#">Facebook</a>
        <a href="#">Google</a>
        <a href="#">SpaceX</a>
      </ListComponent>
    )
  }
}


//form表单操作
//8.1 React表单组件和 html 的不同点
// value/checked 属性设置后，用户输入无效
// textarea 的值要设置在 value 属性
// <textarea name="description" value="This is a description." />
// select 的 value 属性可以是数组，不建议使用 option 的 selected 属性
// <select multiple={true} value={['B', 'C']}>
//  <option value="A">Apple</option>
//  <option value="B">Banana</option>
//  <option value="C">Cranberry</option>
// </select>
// input/textarea 的 onChange 用户每次输入都会触发（即使不失去焦点）
// radio/checkbox/option 点击后触发 onChange



//综合表达组件示例 #
//1.定义复选框组件Checkboxes
class Checkboxes extends Component{
	 render(){
	 	return <span>
	 		 A
	 		 <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="A"/>
	 		 B
	 		 <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="B"/>
	 		 C
	 		 <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="C"/>
	 	</span>
	 }
}

//定义单选框按钮组RadioButtons
class RadioButtons extends Component{
	 saySomething(){
	 	 alert("我是一个单选框按钮组")
	 }
	 render(){
	 	return <span>
            A
            <input onChange={this.props.handleRadio} name="goodRadio" type="radio" value="A"/>
            B
            <input onChange={this.props.handleRadio} name="goodRadio" type="radio" defaultChecked value="B"/>
            C
            <input onChange={this.props.handleRadio} name="goodRadio" type="radio" value="C"/>
	 	</span>
	 }
}



//FormApp组件集成两个组件并处理表单逻辑
class FormApp extends Component{
	 state = {
	 	 inputValue:'请输入',
	 	 selectValue:'A',
	 	 radioValue:'B',
	 	 checkValues:[],
	 	 textareaValue:'请输入...'
	 }
	 handleSubmit = (e)=>{
	 	e.preventDefault();
	 	let formData = {
	 		input:this.refs.goodInput.value,
	 		select:this.refs.goodSelect.value,
	 		textarea:this.refs.goodTextarea.value,
	 		radio:this.state.radioValue,
	 		check:this.state.checkValues,
	 	}
	 	alert("您即将要提交表单");
	 	console.log("提交的数据是：");
	 	console.log(formData);

	 	return false;
	 }
	 handleRadio=(e)=>{
	 	 this.setState({
	 	 	 radioValue:e.target.value
	 	 });
	 }
	 handleCheck = (e)=>{
	 	let checkValues = this.state.checkValues.slice();
	 	let newVal = e.target.value;
	 	let index = checkValues.indexOf(newVal);

	 	console.log("newVal:"+newVal+"  checkValues:"+checkValues);
	 	if(index === -1){
	 		 checkValues.push(newVal);
	 	}else{
	 		 checkValues.splice(index,1);
	 	}
	 	this.setState({
	 		 checkValues:checkValues
	 	});
	 }

	 render(){
	 	return <form onSubmit={this.handleSubmit}>
	 		<h3>请输入内容</h3>
			<input ref="goodInput" type="text" defaultValue={this.state.inputValue}/>
			<br/>
			<h3>请选择</h3>
			<select defaultValue = {this.state.selectValue} ref="goodSelect">
					<option value="A">A</option>
					<option value="B">B</option>
					<option value="C">C</option>
					<option value="D">D</option>
					<option value="E">E</option>
			</select>
			<br/>
			<h3>单向选择</h3>
			<RadioButtons ref="goodRadio" handleRadio={this.handleRadio} />
			  <h3> 多选按钮 </h3>
	          <Checkboxes handleCheck={this.handleCheck} />
	          <br/>

	          <h3> 反馈建议 </h3>
	          <textarea defaultValue={this.state.textareaValue} ref="goodTextarea"></textarea>
	          <br/>

	          <button type="submit">确认提交</button>
	 	</form>
	 }
}

//mixin共享
// mixin 是一个普通对象，通过 mixin 可以在不同组件间共享代码，使你的React程序变得更为可重用。
// 注意，ES6语法不支持mixin写法，而是可以通过decorator去实现代码共享，这里使用ES5语法做示例说明

var SetIntervalMixin = {
	componentWillMount:function(){
		this.intervals = [];
	},
	setInterval:function(){
		this.intervals.push(setInterval.apply(null,arguments));
	},
	componentWillUnmount:function(){
		this.intervals.forEach(clearInterval);
	}
}
var MixinDemo = React.createClass({
	//Use the mixin
	mixins:[SetIntervalMixin],
	getInitialState:function(){
		return {seconds:0}
	},
	componentDidMount:function(){
		//call a method on the mixin
		this.setInterval(this.tick,1000);

	},
	tick:function(){
		this.setState({seconds:this.state.seconds+1});
	},
	render:function(){
		return (
			<p>
				计时器已经运行了：{this.state.seconds} 秒
			</p>
		)
	}
});

//用high-order component的方式来实现mixin
let Mixin = MixinComponent => class extends Component{
	constructor(){
		super();
		this.state = {val:0};
		this.update = this.update.bind(this);
	}
	update(){
		this.setState({
			val:this.state.val+1
		});
	}
	componentWillMount(){
		console.log("will mount...");
	}
	render(){
		return (
		  <MixinComponent
			 update = {this.update}
			 {...this.state}
			 {...this.props}
		  />
		)
	}
	componentDidMount(){
		console.log("mounted...");
	}
}
const ButtonTest =(props)=>{
	 return (
		<button onClick={props.update}>
		  {props.txt} - {props.val}
		</button>
	 )
}
const LabelTest = (props)=>{
	return (
		<label onMouseMove={props.update}>
		   {props.txt} - {props.val}
		</label>
	)
}
let ButtonMixed = Mixin(ButtonTest);
let LabelMixed = Mixin(LabelTest);
class Mixins extends Component{
	 render(){
	 	return (
			<div>
				<ButtonMixed txt="button"/>
				<LabelMixed txt="label"/>
			</div>
	 	)
	 }
}

//进阶
//1. 组件的生命周期
	var MessageBox = React.createClass({
	  getInitialState:function(){
	  	console.log('getInitialState');
	    return {
	        count: 0,
	    }
	  },
	  getDefaultProps:function(){
	    console.log('getDefaultProps');
	  },
	  componentWillMount:function(){
	    console.log('componentWillMount');
	  },
	  componentDidMount:function(){
	    console.log('componentDidMount');
	  },
	  componentWillUnmount: function(){
	    console.log('componentWillUnmount');
	  },
	  shouldComponentUpdate:function(nextProp,nextState){
	    console.log('shouldComponentUpdate');
	    if(nextState.count > 10) return false;

	    return true;
	  },
	  componentWillUpdate:function(nextProp,nextState){
	    console.log('componentWillUpdate');
	  },
	  componentDidUpdate:function(){
	    console.log('componentDidUpdate');
	  },
	  killMySelf: function(){
	      // 包括顶级容器一块干掉，当然在实际项目中可别干这样的傻事
	      ReactDOM.unmountComponentAtNode(  document.getElementById('app') );
	  },
	  doUpdate:function(){
	    this.setState({
	        count: this.state.count + 1,
	    });
	  },
	  render:function(){
	    console.log('渲染')
	    return (
	        <div>
	            <h1 > 计数： {this.state.count}</h1>
	            <button onClick={this.killMySelf}>卸载掉这个组件</button>
	            <button onClick={this.doUpdate}>手动更新一下组件（包括子组件）</button>
	            <Submessage count={this.state.count}/>
	        </div>
	    )
	  }
	});

	var Submessage = React.createClass({
	  componentWillReceiveProps:function(nextProp){
	      console.log('子组件将要获得prop');
	  },
	  shouldComponentUpdate:function(nextProp,nextState){
	      if(nextProp.count> 5) return false;
	      return true;
	  },
	  render:function(){
	      return (
	          <h3>当前计数是：{this.props.count}</h3>
	      )
	  }
	});

// 2. DOM操作
// 给元素加上ref="xxx"后，可直接通过this.refs.xxx获取该DOM元素，而不需要使用getDOMNode或findDOMNode。
// var converter = new showdown.Converter();

// var MarkdownEditor = React.createClass({
//   getInitialState: function() {
//     return {value: '# 我是一级大标题'};
//   },
//   handleChange: function() {
//     this.setState({value: this.refs.textarea.value});
//   },
//   conponentDidMount: function(){
//     console.log(this.refs.textarea);
//   },
//   conponentWillMount: function(){
//     // dangerouslySetInnerHTML这种功能主要用来与 DOM 字符串操作类库一起使用，
//     // 所以提供的 HTML 必须要格式清晰
//     // console.log(converter.makeHtml(this.state.value));
//   },
//   render: function() {
//     return (
//       <div className="MarkdownEditor">
//         <h3>输入</h3>
//         <textarea
//           onChange={this.handleChange}
//           ref="textarea"
//           defaultValue={this.state.value} />
//         <h3>输出</h3>
//         <div
//           className="content"
//           dangerouslySetInnerHTML={{
//             __html: converter.makeHtml(this.state.value)
//           }}
//         />
//       </div>
//     );
//   }
// });

// 事件处理
// 虚拟事件对象： 事件处理器将会传入虚拟事件对象的实例，
// 一个对浏览器本地事件的跨浏览器封装。它有和浏览器本地事件相同的属性和方法，
// 包括 stopPropagation() 和 preventDefault()，但是没有浏览器兼容问题。
// 支持的事件
// 剪贴板事件
// onCopy onCut onPaste
// 键盘事件：
// onKeyDown onKeyPress onKeyUp
// 焦点事件
// onFocus onBlur
// 表单事件
// onChange onInput onSubmit
// 鼠标事件
// onClick onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave
// onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
// onMouseMove onMouseOut onMouseOver onMouseUp
// 触摸事件
// 为了使触摸事件生效，在渲染所有组件之前调用 React.initializeTouchEvents(true)。

// onTouchCancel onTouchEnd onTouchMove onTouchStart
// UI 事件
// onScroll
// 鼠标滚轮滚动事件
// onWheel




class App extends Component{
	 render(){

	 	if (__DEV__) {
		  console.log('Extra logging');
		}
		// ...
		if (__PRERELEASE__) {
		  console.log('release');
		}

	 	 return (
	 	 	<div className="text-center">
	 	 	   <Button/>
	 	 	   <div className="tip"></div>
	 	 	    {/* 这里我们使用以下图标字体 */}
	 	 	    <span className="glyphicon glyphicon-asterisk"></span>
	 	 	</div>
	 	 )
	 }
}
export default MessageBox;