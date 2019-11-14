import React, { useCallback, useEffect, useRef, useState } from 'react';

import Heading from './components/Heading';
import Paragraph from './components/Paragraph';

import headingChars from './data/heading.json';
import paragraphChars from './data/paragraph.json';

import './App.css';

const App = () => {
  const [headingCharArr, setHeadingCharArr] = useState([]);
  const [paraCharArr, setParaCharArr] = useState([]);

  const max = 400;
  const min = 100;

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

  useEffect(() => {
    setTimeout(() => {
      renderHeadingChars(headingChars);
      renderParaChars(paragraphChars);
    }, 1000);
  }, [renderHeadingChars, renderParaChars]);

  return (
    <div className="App">
      <Heading charArr={headingCharArr} />
      <Paragraph charArr={paraCharArr} />
    </div>
  );
};

export default App;
