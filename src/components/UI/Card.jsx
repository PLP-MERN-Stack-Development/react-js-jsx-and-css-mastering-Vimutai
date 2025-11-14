import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  padding = 'p-6',
  shadow = 'shadow-md',
  ...props 
}) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl 
        ${shadow}
        ${padding}
        transition-all duration-200
        hover:shadow-lg
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;