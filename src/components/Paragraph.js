import React from 'react';

const Paragraph = props => {
  const { charArr } = props;

  return (
    <p>
      {charArr.map(char => (
        <span key={char.key} style={{ color: char.color }}>
          {char.char}
        </span>
      ))}
    </p>
  );
};

export default Paragraph;
