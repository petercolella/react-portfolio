import React from 'react';
import './style.css';

const Paragraph = props => {
  const { charArr } = props;

  return (
    <p id="what">
      {charArr.map(char => (
        <span key={char.key} style={{ color: char.color }}>
          {char.char}
        </span>
      ))}
    </p>
  );
};

export default Paragraph;
