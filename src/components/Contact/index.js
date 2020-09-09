import React from 'react';
import { ReactComponent as GitHub } from './github.svg';
import { ReactComponent as Gmail } from './gmail.svg';
import { ReactComponent as LinkedIn } from './linkedin.svg';
import './styles.css';

export default ({ charArr, closingCharArr, show }) => {
  return (
    <div id="where">
      {charArr.map(({ char, color, key }) => (
        <span key={key} style={{ color }}>
          {char}
        </span>
      ))}
      <div className={!show ? 'contact' : 'contact show'}>
        <a
          href="https://github.com/petercolella"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className={!show ? 'svg' : 'svg grow'} id="github" />
        </a>
        <a
          href="mailto:colella.peter.j@gmail.com"
          aria-label="Gmail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Gmail className={!show ? 'svg' : 'svg grow'} id="gmail" />
        </a>
        <a
          href="https://www.linkedin.com/in/peter-colella/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className={!show ? 'svg' : 'svg grow'} id="linkedin" />
        </a>
      </div>
      {closingCharArr.map(({ char, color, key }) => (
        <span key={key} style={{ color }}>
          {char}
        </span>
      ))}
    </div>
  );
};
