import React, { forwardRef } from 'react';
import './style.css';

const year = new Date().getFullYear();
const footerTextArr = `\u00A9${year} Peter Colella`.split('');

export default forwardRef(({ show }, ref) => {
  return (
    <div className={!show ? 'footer' : 'footer show'}>
      <p className={!show ? 'footer-text' : 'footer-text visible'} ref={ref}>
        {footerTextArr.map((char, i) => {
          return <span key={i}>{char}</span>;
        })}
      </p>
    </div>
  );
});
