import React from 'react';
import { ReactComponent as GitHub } from './github.svg';
import { ReactComponent as Gmail } from './gmail.svg';
import { ReactComponent as LinkedIn } from './linkedin.svg';
import './styles.css';

const Contact = props => {
  const { charArr, closingCharArr, show } = props;
  return (
    <div id="where">
      {charArr.map(char => (
        <span key={char.key} style={{ color: char.color }}>
          {char.char}
        </span>
      ))}
      <div className={!show ? 'contact' : 'contact show'}>
        <a
          href="https://github.com/petercolella"
          target="_blank"
          rel="noopener noreferrer">
          <GitHub className={!show ? 'svg' : 'svg grow'} />
        </a>
        <a
          href="mailto:colella.peter.j@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          <Gmail className={!show ? 'svg' : 'svg grow'} />
        </a>
        <a
          href="https://www.linkedin.com/in/peter-colella/"
          target="_blank"
          rel="noopener noreferrer">
          <LinkedIn className={!show ? 'svg' : 'svg grow'} />
        </a>
      </div>
      {closingCharArr.map(char => (
        <span key={char.key} style={{ color: char.color }}>
          {char.char}
        </span>
      ))}
    </div>
  );
};

export default Contact;