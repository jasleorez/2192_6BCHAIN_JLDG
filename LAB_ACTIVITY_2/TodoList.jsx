import React, { Component } from 'react';
import './List.css';

class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <h2>Todo List</h2>
        <ul>
          <li>Clean Porch</li>
          <li>Wash Car</li>
          <li>Attend BCHAIN Class</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
