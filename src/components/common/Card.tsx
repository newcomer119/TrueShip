import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevation?: 'flat' | 'low' | 'medium' | 'high';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  elevation = 'medium',
}) => {
  const elevationClasses = {
    flat: 'border border-gray-200',
    low: 'shadow-sm',
    medium: 'shadow-md',
    high: 'shadow-lg',
  };

  return (
    <div className={`bg-white rounded-lg overflow-hidden ${elevationClasses[elevation]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;