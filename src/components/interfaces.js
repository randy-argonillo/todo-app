import PropTypes from 'prop-types';

const Todo = PropTypes.shape({
  id: PropTypes.string,
  description: PropTypes.string,
  isCompleted: PropTypes.bool
});

// eslint-disable-next-line import/prefer-default-export
export { Todo };