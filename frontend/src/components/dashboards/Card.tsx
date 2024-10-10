import React from 'react';

interface CardProps {
  title: string;
  content: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, content, className }) => {
  return (
    <div className={`card ${className}`}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
