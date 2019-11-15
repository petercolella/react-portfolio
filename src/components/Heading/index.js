import React from 'react';
import './style.css';

const Heading = props => {
  const { charArr } = props;

  return (
    <h1 id="who">
      {charArr.map(char => (
        <span key={char.key} style={{ color: char.color }}>
          {char.char}
        </span>
      ))}
    </h1>
  );
};

export default Heading;
