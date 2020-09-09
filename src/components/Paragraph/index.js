import React from 'react';
import './style.css';

export default ({ charArr }) => {
  return (
    <p id="what">
      {charArr.map(({ char, color, key }) => (
        <span key={key} style={{ color }}>
          {char}
        </span>
      ))}
    </p>
  );
};
