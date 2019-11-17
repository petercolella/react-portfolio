import React, { useCallback, useEffect, useRef, useState } from 'react';

import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
  const [paragraphCharArr, setParagraphCharArr] = useState([]);
  const [divCharArr, setDivCharArr] = useState([]);
  const [closingDivCharArr, setClosingDivCharArr] = useState([]);
  const [show, setShow] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const randomTimeTotalRef = useRef();
  randomTimeTotalRef.current = 0;

  const renderChars = useCallback((chars, setArr) => {
    chars.forEach((char, i) => {
      char.key = i;
      const timeout = (randomTimeTotalRef.current += randomTime());
      setTimeout(() => {
        setArr(arr => [...arr, char]);
      }, timeout);
    });
  }, []);

  const renderContact = useCallback(() => {
    setTimeout(() => {
      setShow(true);
    }, (randomTimeTotalRef.current += 250));
  }, []);

  const renderFooter = useCallback(() => {
    setTimeout(() => {
      setShowFooter(true);
    }, (randomTimeTotalRef.current += 6000));
  }, []);

  const sparkle = useCallback(() => {
    setTimeout(() => {
      const charArr = document.querySelectorAll('.footer-name-char');
      charArr.forEach(char => {
        setTimeout(() => {
          char.classList.add('sparkle');
        }, (randomTimeTotalRef.current += 10));
      });
      charArr.forEach(char => {
        setTimeout(() => {
          char.classList.remove('sparkle');
        }, (randomTimeTotalRef.current += 10));
      });
      randomTimeTotalRef.current += 250;
      for (let i = charArr.length - 1; i >= 0; i--) {
        setTimeout(() => {
          charArr[i].classList.add('sparkle');
        }, (randomTimeTotalRef.current += 10));
      }
      for (let j = charArr.length - 1; j >= 0; j--) {
        setTimeout(() => {
          charArr[j].classList.remove('sparkle');
        }, (randomTimeTotalRef.current += 10));
      }
    }, (randomTimeTotalRef.current += 1500));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      renderChars(headingChars, setHeadingCharArr);
      renderChars(paragraphChars, setParagraphCharArr);
      renderChars(divChars, setDivCharArr);
      renderChars(closingDivChars, setClosingDivCharArr);
      renderContact();
      renderFooter();
      sparkle();
    }, 1000);
  }, [renderChars, renderContact, renderFooter, sparkle]);

  return (
    <div className="App">
      <Heading charArr={headingCharArr} />
      <Paragraph charArr={paragraphCharArr} />
      <Contact
        charArr={divCharArr}
        closingCharArr={closingDivCharArr}
        show={show}
      />
      <Footer show={showFooter} />
    </div>
  );
};

export default App;
