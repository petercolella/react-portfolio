import React, { useCallback, useEffect, useRef, useState } from 'react';
import Heading from './Heading';
import './App.css';
import headingChars from './heading.json';

const App = () => {
  const [headingCharArr, setHeadingCharArr] = useState([]);
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

  useEffect(() => {
    renderHeadingChars(headingChars);
  }, [renderHeadingChars]);

  return (
    <div className="App">
      <Heading charArr={headingCharArr} />
    </div>
  );
};

export default App;
