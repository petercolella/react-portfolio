import React from 'react';
import './style.css';

const Footer = props => {
  const { show } = props;

  return <div className={!show ? 'footer' : 'footer show'}></div>;
};

export default Footer;
