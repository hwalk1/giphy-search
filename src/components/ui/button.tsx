import React from 'react';

interface ButtonProps {
  type?: 'submit' | 'button';
  children: React.ReactNode;
}

const Button = ({ type = 'submit', children }: ButtonProps) => {
  return (
    <button type={type} className="button">
      {children}
    </button>
  );
};

export default Button;
