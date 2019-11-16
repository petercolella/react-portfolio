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

  const renderChars = useCallback((chars, cb) => {
    chars.forEach((char, i) => {
      char.key = i;
      cb(char);
    });
  }, []);

  const renderHeadingSpan = useCallback(char => {
    setTimeout(() => {
      setHeadingCharArr(headingCharArr => [...headingCharArr, char]);
    }, (randomTimeTotalRef.current += randomTime()));
  }, []);

  const renderParaSpan = useCallback(char => {
    setTimeout(() => {
      setParaCharArr(paraCharArr => [...paraCharArr, char]);
    }, (randomTimeTotalRef.current += randomTime()));
  }, []);

  const renderDivSpan = useCallback(char => {
    setTimeout(() => {
      setDivCharArr(divCharArr => [...divCharArr, char]);
    }, (randomTimeTotalRef.current += randomTime()));
  }, []);

  const renderClosingDivSpan = useCallback(char => {
    setTimeout(() => {
      setClosingDivCharArr(closingDivCharArr => [...closingDivCharArr, char]);
    }, (randomTimeTotalRef.current += randomTime()));
  }, []);

  const renderContact = useCallback(() => {
    setTimeout(() => {
      setShow(true);
    }, (randomTimeTotalRef.current += 250));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      renderChars(headingChars, renderHeadingSpan);
      renderChars(paragraphChars, renderParaSpan);
      renderChars(divChars, renderDivSpan);
      renderChars(closingDivChars, renderClosingDivSpan);
      renderContact();
    }, 1000);
  }, [
    renderChars,
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
