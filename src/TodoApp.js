import React from 'react';
import uuid from 'uuid/v4';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './Todo.css';

class TodoApp extends React.Component {
  state = {
    todos: []
  };

  handleAddTodo = todo =>
    this.setState(prevState => ({
      todos: [...prevState.todos, { ...todo, id: uuid() }]
    }));

  handleEdit = todo => {
    this.setState(prevState => ({
      todos: prevState.todos.map(item => (item.id === todo.id ? todo : item))
    }));
  };

  handleRemove = todo => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(item => item.id !== todo.id)
    }));
  };

  handleToggleComplete = todo => {
    this.setState(prevState => ({
      todos: prevState.todos.map(item =>
        item.id === todo.id ? { ...todo, isCompleted: !todo.isCompleted } : item
      )
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="TodoApp">
        <div className="header">
          <h2>Your Daily Todos</h2>
        </div>
        <TodoList
          todos={todos}
          onEdit={this.handleEdit}
          onRemove={this.handleRemove}
          onToggleComplete={this.handleToggleComplete}
        />
        <TodoForm onSubmit={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;
