import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { Todo } from './interfaces';

import 'antd/dist/antd.css';
import '../Todo.css';

class ToDoItem extends React.Component {
  static defaultProps = {
    onEdit: () => {},
    onRemove: () => {},
    onToggleComplete: () => {}
  };

  static propTypes = {
    todo: Todo.isRequired,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
    onToggleComplete: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.todoItem = React.createRef();
  }

  componentDidMount() {
    if (!this.isInViewPort()) {
      this.scrollToBottom();
    }
  }

  isInViewPort = () => {
    const bounding = this.todoItem.current.getBoundingClientRect();
    return bounding.top < 580;
  }

  scrollToBottom = () =>
    this.todoItem.current.scrollIntoView({ behavior: 'smooth' });

  handleEdit = () => {
    const { onEdit, todo } = this.props;
    onEdit(todo);
  };

  handleRemove = () => {
    const { onRemove, todo } = this.props;
    onRemove(todo);
  };

  handleDescClick = () => {
    const { onToggleComplete, todo } = this.props;
    onToggleComplete(todo);
  };

  render() {
    const { todo } = this.props;

    return (
      <li className="TodoItem" ref={this.todoItem}>
        <div
          onClick={this.handleDescClick}
          onKeyPress={this.handleDescClick}
          role="button"
          tabIndex="0"
          className={`description ${todo.isCompleted ? 'completed' : ''}`}
        >
          {todo.description}
        </div>
        <div className="action-buttons">
          <Button
            type="primary"
            icon="edit"
            shape="circle"
            size="small"
            onClick={this.handleEdit}
          />
          <Button
            type="danger"
            icon="delete"
            shape="circle"
            size="small"
            onClick={this.handleRemove}
          />
        </div>
      </li>
    );
  }
}

export default ToDoItem;
