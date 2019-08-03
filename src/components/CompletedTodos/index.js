import React from 'react';
import { Button } from 'antd';

import TodoList from '../TodoList';
import './CompletedTodos.css';

const CompletedTodos = ({
  todos,
  onEdit,
  onRemove,
  onToggleComplete,
  onClearCompletedTodos
}) =>
  todos.length > 0 && (
    <div className="CompletedTodos">
      <div className="CompletedTodos__header">
        <h3>Completed</h3>
        <Button size="small" shape="round" onClick={onClearCompletedTodos}>
          Clear
        </Button>
      </div>
      <div className="body">
        <TodoList
          todos={todos}
          onEdit={onEdit}
          onRemove={onRemove}
          onToggleComplete={onToggleComplete}
        />
      </div>
    </div>
  );

export default CompletedTodos;
