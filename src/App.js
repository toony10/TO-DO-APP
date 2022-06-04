import React, { Component } from 'react';
import './App.css';
import ToDoList from './Components/todo-items/todo-items';
import AddItems from './Components/add-items/add-items';
class App extends Component
{
  state = {
    items: [


    ]
  };
  deleteItems = (id) =>
  {
    let items = this.state.items.filter(item => { return item.id !== id; });
    this.setState({ items });
  };

  addItems = (item) =>
  {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };
  render()
  {
    return (
      <div>
        <h1> To Do List </h1>
        <div className='items-list'>
          <ToDoList items={ this.state.items } deleteItems={ this.deleteItems } doneMisions={ this.doneMisions } />
        </div>
        <div className='add-Item-section'>
          <AddItems AddItems={ this.addItems } />
        </div>
      </div>
    );
  }
}

export default App;
