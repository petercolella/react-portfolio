import React from 'react';
import './style.css';

const year = new Date().getFullYear();

const Footer = props => {
  const { show } = props;

  return (
    <div className={!show ? 'footer' : 'footer show'}>
      <p className={!show ? 'footer-text' : 'footer-text visible'}>
        &#169;{year} <span className="footer-name-char">P</span>
        <span className="footer-name-char">e</span>
        <span className="footer-name-char">t</span>
        <span className="footer-name-char">e</span>
        <span className="footer-name-char">r</span>
        <span className="footer-name-char"> </span>
        <span className="footer-name-char">C</span>
        <span className="footer-name-char">o</span>
        <span className="footer-name-char">l</span>
        <span className="footer-name-char">e</span>
        <span className="footer-name-char">l</span>
        <span className="footer-name-char">l</span>
        <span className="footer-name-char">a</span>
      </p>
    </div>
  );
};

export default Footer;
