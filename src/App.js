// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state= {
      isClicked:false,
      todos: [],
      text: ""
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    console.log("Click Handled")
    console.log(this.state.isClicked)
    // if(this.isClicked===true){
    //   this.setState({isClicked:true});
    // }else{
    //   this.setState({isClicked: !this.state.isClicked})
    // }
    this.setState({isClicked:!this.state.isClicked})
  }
  handleChange=(event)=>{
    // console.log(event.target.value)
    this.setState({
      text: event.target.value
    })
  }
  handleSubmit=()=>{
    // console.log(event.target.value)
    this.setState({
      todos:[...this.state.todos, this.state.text],
      text:""
    })
    
  }
  handleDelete=(index)=>{
      let x=[...this.state.todos]
      x.splice(index,1)
    // console.log(event.target.value)
    this.setState({
      todos:[...x],
    
    })
    
  }
componentDidUpdate(){

  // console.log(this.state.text)
  console.log(this.state.todos)

}

  render(){
  return(
    <div className="App">
      <h1>HEllo</h1>
      <h2>ToDos LIST</h2>
      <input type="text" onChange={this.handleChange} value={this.state.text}/>
      {/* <button onClick={this.handleClick}>{this.state.isClicked===true ? "Toggle" : "UnToggle"}</button> */}
      <button onClick={this.handleSubmit}>Submit</button>
      <ul>
      {
        this.state.todos.map((todo,index)=>{
          return<li key={index}>{todo} <button onClick={(e)=>this.handleDelete({index})}>Delete</button>
          </li>
        })
      }</ul>
    </div>
      )}
}

export default App;
