import React from 'react';
import './style.css';

export default ({ charArr }) => {
  return (
    <h1 id="who">
      {charArr.map(({ char, color, key }) => (
        <span key={key} style={{ color }}>
          {char}
        </span>
      ))}
    </h1>
  );
};
