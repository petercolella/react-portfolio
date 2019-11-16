import React from 'react';
import './style.css';

const year = new Date().getFullYear();

const Footer = props => {
  const { show } = props;

  return (
    <div className={!show ? 'footer' : 'footer show'}>
      <p className={!show ? 'footer-text' : 'footer-text visible'}>
        &#169;{year} Peter Colella
      </p>
    </div>
  );
};

export default Footer;
