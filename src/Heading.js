import React from 'react';

const Heading = props => {
  const { charArr } = props;
  console.log('charArr', charArr);

  return (
    <h1>
      {charArr.map(char => (
        <span key={char} style={{ color: char.color }}>
          {char.char}
        </span>
      ))}
    </h1>
  );
};

export default Heading;
