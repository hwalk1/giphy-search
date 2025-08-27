import React from 'react';
import './button.css';

interface ButtonProps {
  type?: 'submit' | 'button';
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = ({
  type = 'submit',
  children,
  className,
  onClick,
}: ButtonProps) => {
  const finalClassName = className ? `button ${className}` : 'button';
  return (
    <button type={type} className={finalClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
