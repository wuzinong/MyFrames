
import React, { PropTypes,Component } from 'react';

import ReactDOM from 'react-dom';

import pureRender from 'pure-render-decorator';

import '../less/list.less';

//example source website:https://segmentfault.com/a/1190000004290333
class List extends Component{
     constructor(props){
        super(props);
        this.state={
            name:"",
            age:"",
            persons:[]
        }
     }
      render(){
         const {name,age,persons} = this.state;
         return (
            <div className="addList">
            <dl className="clearfix">
               <dt>Name:</dt>
               <dd><input type="text" value={name} name="name" onChange={this._handleChange.bind(this)} /></dd>
            </dl>
            <dl className="clearfix">
               <dt>age:</dt>
               <dd> <input type="text" value={age} name="age" onChange={this._handleChange.bind(this)}/></dd>
            </dl>

            <button onClick={this._handleClick.bind(this)}>确认</button>
              {persons.map((person,index)=>(
              <Person key={index} name={person.name} age={person.age}></Person>
            ))}
            </div>
         )
      }
      _handleChange(event){
         this.setState({[event.target.name]:event.target.value});
         //console.log({[event.target.name]:event.target.value});
      }
      _handleClick(){
         const {name,age} = this.state;
         this.setState({
            name:"",
            age:"",
            persons:this.state.persons.concat([{name:name,age:age}])
         })
      }
}


// class Person extends Component {
//      componentWillReceiveProps(newProps){
//            console.log(`我新的props的name是${newProps.name}，age是${newProps.age}。我以前的props的name是${this.props.name}，age是${this.props.age}是我要re-render了`);
//      }
//      render(){
//         console.log("我re-render了");
//          const {name,age} = this.props;
//          return (
//              <div>
//                <span>name:</span><span>{name}&nbsp;</span>
//                <span>age:</span><span>{age}</span>
//                <br/>
//              </div>

//         )
//      }
// }

class PersonOrigin  extends Component {

  render() {
    console.log("我re-render了");
    const {name,age} = this.props;

      return (
        <div>
          <span>姓名:</span>
          <span>{name}</span>
          <span> age:</span>
          <span>{age}</span>
        </div>
      )
  }
}

const Person = pureRender(PersonOrigin);

export default List;
