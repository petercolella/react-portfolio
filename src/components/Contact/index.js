import React from 'react';
import './styles.css';

const Contact = props => {
  const { show } = props;
  console.log(show);
  return <div className={!show ? 'contact' : 'contact show'}></div>;
};

export default Contact;
