import React from 'react';
import './style.css';

const year = new Date().getFullYear();
const footerText = `\u00A9${year} Peter Colella`;
const footerTextArr = footerText.split('');

const Footer = props => {
  const { show } = props;

  return (
    <div className={!show ? 'footer' : 'footer show'}>
      <p className={!show ? 'footer-text' : 'footer-text visible'}>
        {footerTextArr.map((char, i) => {
          return (
            <span key={i} className="footer-name-char">
              {char}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default Footer;
