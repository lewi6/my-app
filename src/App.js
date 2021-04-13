import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
import About from './pages/About'
import axios from 'axios'


class App extends Component {

  state = {
    todos:[
      {
        id:uuid.v4(),
        title:'one',
        completed:false
      },
      {
        id:uuid.v4(),
        title:'two',
        completed:true
      },
      {
        id:uuid.v4(),
        title:'three',
        completed: false
      }
    ]
  }

  

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })  });
  }

  adTodo = (title) => {

      const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props=>(
              <React.Fragment>
                <AddTodo adTodo={this.adTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
           <Route path="/about" component={About} />
          </div> 
        </div>
      </Router>
    );
  }
}

export default App;
