import React from 'react';
import './styles.css';

const Contact = props => {
  const { charArr, closingCharArr, show } = props;
  return (
    <div className="where">
      {charArr.map(char => (
        <span key={char.key} style={{ color: char.color }}>
          {char.char}
        </span>
      ))}
      <div className={!show ? 'contact' : 'contact show'}></div>
      {closingCharArr.map(char => (
        <span key={char.key} style={{ color: char.color }}>
          {char.char}
        </span>
      ))}
    </div>
  );
};

export default Contact;
