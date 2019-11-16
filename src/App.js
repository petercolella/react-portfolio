import React, { useCallback, useEffect, useRef, useState } from 'react';

import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import Contact from './components/Contact';

import headingChars from './data/heading.json';
import paragraphChars from './data/paragraph.json';
import divChars from './data/div.json';
import closingDivChars from './data/closing-div.json';

import './App.css';

const max = 250;
const min = 50;

const randomTime = () => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const App = () => {
  const [headingCharArr, setHeadingCharArr] = useState([]);
  const [paraCharArr, setParaCharArr] = useState([]);
  const [divCharArr, setDivCharArr] = useState([]);
  const [closingDivCharArr, setClosingDivCharArr] = useState([]);
  const [show, setShow] = useState(false);

  const randomTimeTotalRef = useRef();
  randomTimeTotalRef.current = 0;

  const parseChars = useCallback((chars, cb) => {
    chars.forEach((char, i) => {
      char.key = i;
      cb(char);
    });
  }, []);

  const addCharsToState = (char, setArr) => {
    const timeout = (randomTimeTotalRef.current += randomTime());
    setTimeout(() => {
      setArr(arr => [...arr, char]);
    }, timeout);
  };

  const renderHeadingSpan = useCallback(char => {
    addCharsToState(char, setHeadingCharArr);
  }, []);

  const renderParaSpan = useCallback(char => {
    addCharsToState(char, setParaCharArr);
  }, []);

  const renderDivSpan = useCallback(char => {
    addCharsToState(char, setDivCharArr);
  }, []);

  const renderClosingDivSpan = useCallback(char => {
    addCharsToState(char, setClosingDivCharArr);
  }, []);

  const renderContact = useCallback(() => {
    setTimeout(() => {
      setShow(true);
    }, (randomTimeTotalRef.current += 250));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      parseChars(headingChars, renderHeadingSpan);
      parseChars(paragraphChars, renderParaSpan);
      parseChars(divChars, renderDivSpan);
      parseChars(closingDivChars, renderClosingDivSpan);
      renderContact();
    }, 1000);
  }, [
    parseChars,
    renderHeadingSpan,
    renderParaSpan,
    renderDivSpan,
    renderClosingDivSpan,
    renderContact
  ]);

  return (
    <div className="App">
      <Heading charArr={headingCharArr} />
      <Paragraph charArr={paraCharArr} />
      <Contact
        charArr={divCharArr}
        closingCharArr={closingDivCharArr}
        show={show}
      />
    </div>
  );
};

export default App;
