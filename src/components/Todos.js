import React, { Component } from 'react';
import Todoitem from './Todoitem'
import PropTypes from 'prop-types';

  class Todos extends Component {
    

  render(){
    return this.props.todos.map((todo) => (
      <Todoitem key={todo.id} todo={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete} />
      // <h2>hello</h2>
      )
    )
  }  
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos;
