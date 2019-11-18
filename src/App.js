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

  const charRef = useRef();

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
    const charArr = charRef.current.childNodes;
    let timeout = 0;

    const loop = (forwardBoolean, addBoolean, speed) => {
      const arr = forwardBoolean ? charArr : [...charArr].reverse();

      const styleArr = [];
      const shadowPx = 0.5;
      const shadowIncrement = (shadowPx / arr.length) * shadowPx * 2;

      let hShadow = forwardBoolean ? shadowPx : -shadowPx;
      let vShadow = !forwardBoolean ? shadowPx : -shadowPx;

      arr.forEach((char, i) => {
        const pastHalfway = i + 1 <= arr.length / 2 ? 1 : -1;

        // console.log(`
        // forwardBoolean: ${forwardBoolean}
        // addBoolean: ${addBoolean}
        // i: ${i}
        // pastHalfway: ${pastHalfway}
        // ${hShadow}
        // ${vShadow}

        // `);

        const style = `text-shadow: ${hShadow}px ${vShadow}px ${shadowPx *
          2}px #c4dce5`;
        styleArr.push(style);

        setTimeout(() => {
          addBoolean
            ? char.classList.add('sparkle')
            : char.classList.remove('sparkle');
          addBoolean
            ? char.setAttribute('style', `${styleArr[i]}`)
            : char.setAttribute('style', null);
        }, (timeout += speed));

        hShadow -=
          pastHalfway * (forwardBoolean ? shadowIncrement : -shadowIncrement);
        vShadow -=
          pastHalfway * (!forwardBoolean ? shadowIncrement : -shadowIncrement);
      });
    };

    loop(true, true, 10);
    loop(true, false, 10);
    timeout += 500;
    loop(false, true, 10);
    loop(false, false, 10);

    setTimeout(() => {
      sparkle();
    }, 6000);
  }, []);

  const startSparkle = useCallback(() => {
    setTimeout(() => {
      sparkle();
    }, (randomTimeTotalRef.current += 2000));
  }, [sparkle]);

  useEffect(() => {
    setTimeout(() => {
      renderChars(headingChars, setHeadingCharArr);
      renderChars(paragraphChars, setParagraphCharArr);
      renderChars(divChars, setDivCharArr);
      renderChars(closingDivChars, setClosingDivCharArr);
      renderContact();
      renderFooter();
      startSparkle();
    }, 1000);
  }, [renderChars, renderContact, renderFooter, startSparkle]);

  return (
    <div className="App">
      <Heading charArr={headingCharArr} />
      <Paragraph charArr={paragraphCharArr} />
      <Contact
        charArr={divCharArr}
        closingCharArr={closingDivCharArr}
        show={show}
      />
      <Footer ref={charRef} show={showFooter} />
    </div>
  );
};

export default App;
