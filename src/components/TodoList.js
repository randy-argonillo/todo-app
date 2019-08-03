import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import EditableTodoItem from './EditableTodoItem';
import { Todo } from './interfaces';

import '../Todo.css';
import './TodoList.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.bottomPlaceholder = React.createRef();
  }

  // componentDidMount() {
  //   this.scrollToBottom();
  // }

  // componentDidUpdate() {
  //   this.scrollToBottom();
  // }

  // scrollToBottom = () =>
  //   this.bottomPlaceholder.current.scrollIntoView({ behavior: 'smooth' });
  
  render() {
    const { todos, onEdit, onRemove, onToggleComplete } = this.props; 

    return (
      <div className="TodoList">
        <ul className="list">
          <TransitionGroup>
            {todos.map(todo => (
              <CSSTransition key={todo.id} timeout={500} classNames="move">
                <EditableTodoItem
                  key={todo.id}
                  todo={todo}
                  onEdit={onEdit}
                  onRemove={onRemove}
                  onToggleComplete={onToggleComplete}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
        <div ref={this.bottomPlaceholder} />
      </div>
    );
  }
}

TodoList.defaultProps = {
  onEdit: () => {},
  onRemove: () => {},
  onToggleComplete: () => {}
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(Todo).isRequired,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
  onToggleComplete: PropTypes.func
};

export default TodoList;
