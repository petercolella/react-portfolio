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

const App = () => {
  const [headingCharArr, setHeadingCharArr] = useState([]);
  const [paraCharArr, setParaCharArr] = useState([]);
  const [divCharArr, setDivCharArr] = useState([]);
  const [closingDivCharArr, setClosingDivCharArr] = useState([]);
  const [show, setShow] = useState(false);

  const randomTimeTotalRef = useRef();
  randomTimeTotalRef.current = 0;

  const renderHeadingSpan = useCallback(char => {
    const randomTime = Math.floor(Math.random() * (max - min)) + min;
    randomTimeTotalRef.current += randomTime;
    setTimeout(() => {
      setHeadingCharArr(headingCharArr => [...headingCharArr, char]);
    }, randomTimeTotalRef.current);
  }, []);

  const renderHeadingChars = useCallback(
    chars => {
      chars.forEach((char, i) => {
        char.key = i;
        renderHeadingSpan(char);
      });
    },
    [renderHeadingSpan]
  );

  const renderParaSpan = useCallback(char => {
    const randomTime = Math.floor(Math.random() * (max - min)) + min;
    randomTimeTotalRef.current += randomTime;
    setTimeout(() => {
      setParaCharArr(paraCharArr => [...paraCharArr, char]);
    }, randomTimeTotalRef.current);
  }, []);

  const renderParaChars = useCallback(
    chars => {
      chars.forEach((char, i) => {
        char.key = i;
        renderParaSpan(char);
      });
    },
    [renderParaSpan]
  );

  const renderDivSpan = useCallback(char => {
    const randomTime = Math.floor(Math.random() * (max - min)) + min;
    randomTimeTotalRef.current += randomTime;
    setTimeout(() => {
      setDivCharArr(divCharArr => [...divCharArr, char]);
    }, randomTimeTotalRef.current);
  }, []);

  const renderDivChars = useCallback(
    chars => {
      chars.forEach((char, i) => {
        char.key = i;
        renderDivSpan(char);
      });
    },
    [renderDivSpan]
  );

  const renderClosingDivSpan = useCallback(char => {
    const randomTime = Math.floor(Math.random() * (max - min)) + min;
    randomTimeTotalRef.current += randomTime;
    setTimeout(() => {
      setClosingDivCharArr(closingDivCharArr => [...closingDivCharArr, char]);
    }, randomTimeTotalRef.current);
  }, []);

  const renderClosingDivChars = useCallback(
    chars => {
      const randomTime = Math.floor(Math.random() * (max - min)) + min;
      randomTimeTotalRef.current += randomTime;
      chars.forEach((char, i) => {
        char.key = i;
        renderClosingDivSpan(char);
      });
    },
    [renderClosingDivSpan]
  );

  const renderContact = useCallback(() => {
    randomTimeTotalRef.current += 500;
    setTimeout(() => {
      setShow(true);
    }, randomTimeTotalRef.current);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      renderHeadingChars(headingChars);
      renderParaChars(paragraphChars);
      renderDivChars(divChars);
      renderClosingDivChars(closingDivChars);
      renderContact();
    }, 1000);
  }, [
    renderHeadingChars,
    renderParaChars,
    renderDivChars,
    renderClosingDivChars,
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
