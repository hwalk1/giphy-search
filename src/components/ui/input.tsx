import React from 'react';
import './input.css';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ ...props }) => {
    return <input type="text" className="input" {...props} />;
  },
);

export default Input;
