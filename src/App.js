import React, { useCallback, useEffect, useRef, useState } from 'react';
import Heading from './Heading';
import './App.css';
import chars from './chars.json';

const App = () => {
  const [charArr, setCharArr] = useState([]);
  const max = 1500;
  const min = 500;

  let randomTimeTotal = 0;
  const randomTimeTotalRef = useRef();
  randomTimeTotalRef.current = randomTimeTotal;

  const renderSpan = useCallback(char => {
    const randomTime = Math.floor(Math.random() * (max - min)) + min;
    randomTimeTotalRef.current += randomTime;
    setTimeout(() => {
      console.log('charArr before', charArr);
      console.log('...charArr', ...charArr);
      setCharArr(charArr => [...charArr, char]);
      console.log('charArr', charArr);
    }, randomTimeTotalRef.current);
  }, []);

  const renderChars = useCallback((chars, i) => {
    if (i >= chars.length) return;
    i = i || 0;
    renderSpan(chars[i]);
    i++;
    renderChars(chars, i);
  }, []);

  useEffect(() => {
    renderChars(chars);
  }, []);

  return (
    <div className="App">
      <Heading charArr={charArr} />
    </div>
  );
};

export default App;
