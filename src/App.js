import React, { Component } from 'react';
import TodoItems from'./componenet/Todoitems/Todoitems'
import AddItem from './componenet/Additems/Additem';


class  App extends Component {
  state = {
    items :[
      {id:1,name:'Djamel',age:5},
      {id:2,name:'Amine',age:25},
      {id:3,name:'Mourad',age:35}
    ]
  }

  deleteItem = (id) =>{
    let items = this.state.items
    let i = items.findIndex(item => item.id === id)
    items.splice(i,1)
    this.setState({items})
  }

  addItem = (item) => {
    item.id = Math.random()
    let items = this.state.items
    items.push(item)
    this.setState({items})
  }
  render(){
    return (
      
      <div className="App container">
        <h1 className="text-center"> TodoList App</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
