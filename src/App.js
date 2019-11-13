import React, { useCallback, useEffect, useRef, useState } from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';
import headingChars from './heading.json';
import paragraphChars from './paragraph.json';
import './App.css';

const App = () => {
  const [headingCharArr, setHeadingCharArr] = useState([]);
  const [paraCharArr, setParaCharArr] = useState([]);

  const max = 750;
  const min = 250;

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
    renderHeadingChars(headingChars);
    renderParaChars(paragraphChars);
  }, [renderHeadingChars, renderParaChars]);

  return (
    <div className="App">
      <Heading charArr={headingCharArr} />
      <Paragraph charArr={paraCharArr} />
    </div>
  );
};

export default App;
