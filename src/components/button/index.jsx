import PropTypes from 'prop-types';
import './index.css';

import React from 'react';

function Button({ children, style, disabled, type }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btnComponent btnComponent-${style}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  style: 'primary',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
