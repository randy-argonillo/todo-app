import React from 'react';
import uuid from 'uuid/v4';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import CompletedTodos from './components/CompletedTodos';

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

  handleClearCompletedTodos = () => {
    this.setState({ todos: this.getActiveTodos() });
  };

  getCompletedTodos = () => this.state.todos.filter(todo => todo.isCompleted);

  getActiveTodos = () => this.state.todos.filter(todo => !todo.isCompleted);

  render() {
    return (
      <div className="TodoApp">
        <div className="header">
          <h2>Your Daily To Dos</h2>
        </div>
        <TodoForm onSubmit={this.handleAddTodo} />
        <TodoList
          todos={this.getActiveTodos()}
          onEdit={this.handleEdit}
          onRemove={this.handleRemove}
          onToggleComplete={this.handleToggleComplete}
        />
        <CompletedTodos
          todos={this.getCompletedTodos()}
          onEdit={this.handleEdit}
          onRemove={this.handleRemove}
          onToggleComplete={this.handleToggleComplete}
          onClearCompletedTodos={this.handleClearCompletedTodos}
        />
      </div>
    );
  }
}

export default TodoApp;
