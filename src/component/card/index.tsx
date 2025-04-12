import React from 'react';
import * as styles from './card.module.scss';

interface CardProps {
  title?: React.ReactNode;
  content: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content, style, className, children }) => {
  return (
    // <div className={`card ${className || ''}`} style={style}>
    <div className={`${styles.card} ${className}`}>
      {title && <div className="card-header">{title}</div>}
      <div className="card-content">{content}</div>
      {children}
    </div>
  );
};

export default Card;
