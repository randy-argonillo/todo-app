import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

import { Todo } from './interfaces';


class EditableTodoItem extends React.Component {
  static propTypes = {
    todo: Todo.isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func,
    onToggleComplete: PropTypes.func
  };

  static defaultProps = {
    onRemove: () => {},
    onToggleComplete: () => {}
  };

  state = {
    isEdit: false
  };

  handleEditTodo = () => this.setState({ isEdit: true });

  handleSubmit = todo => {
    const { onEdit } = this.props;

    onEdit(todo);
    this.setState({ isEdit: false });
  };

  render() {
    const { todo, onRemove, onToggleComplete } = this.props;
    const { isEdit } = this.state;

    return (
      <div>
        {isEdit ? (
          <TodoForm onSubmit={this.handleSubmit} todo={todo} />
        ) : (
          <TodoItem
            todo={todo}
            onEdit={this.handleEditTodo}
            onRemove={onRemove}
            onToggleComplete={onToggleComplete}
          />
        )}
      </div>
    );
  }
}

export default EditableTodoItem;
