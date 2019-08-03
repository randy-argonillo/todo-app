import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from './interfaces';

class ToDoForm extends React.Component {
  static defaultProps = {
    onSubmit: () => {},
    todo: { id: null, description: '' }
  };

  static propTypes = {
    onSubmit: PropTypes.func,
    todo: Todo
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  state = {
    todo: this.props.todo
  };

  componentDidMount() {
    if (this.mode === 'edit') {
      this.inputRef.current.focus();
    }
  }

  get mode() {
    const { todo } = this.state;
    return todo.id ? 'edit' : 'add';
  }

  handleChange = evt => {
    const { value } = evt.target;
    this.setState(prevState => ({
      todo: { ...prevState.todo, description: value }
    }));
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.todo.description === '') return;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onSubmit(this.state.todo);
    this.setState({ todo: { id: null, description: '' } });
  };

  render() {
    const { todo } = this.state;

    const placeholder = this.mode === 'add' ? 'Add todo' : '';

    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <input
          className={`${
            this.mode === 'add' ? 'todoInputAdd' : 'todoInputEdit'
          }`}
          ref={this.inputRef}
          name="description"
          value={todo.description}
          onChange={this.handleChange}
          placeholder={placeholder}
        />
      </form>
    );
  }
}

export default ToDoForm;
