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

const loopOptions = {
  shadowPx: 2,
  blurRadius: 4,
  shadowColorBottom: '#fff',
  shadowColorTop: '#fff',
  textColor: '#f8f8f2',
  vShadowBottom: 0,
  vShadowTop: 0
};

const sparkleOptions = {
  charOffset: 2,
  speedIncrement: 25,
  timeBetweenDirectionChg: 100,
  timeBetweenSparkles: 4000
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
      const {
        shadowPx,
        blurRadius,
        shadowColorBottom,
        shadowColorTop,
        textColor
      } = loopOptions;

      let { vShadowBottom, vShadowTop } = loopOptions;

      const hShadow = forwardBoolean ? -shadowPx : shadowPx;
      const shadowIncrement = (shadowPx / arr.length) * 2;

      const styleArr = [];

      arr.forEach((char, i) => {
        const pastHalfway = i + 1 <= arr.length / 2 ? 1 : -1;

        // console.log(`
        // forwardBoolean: ${forwardBoolean}
        // addBoolean: ${addBoolean}
        // i: ${i}
        // pastHalfway: ${pastHalfway}
        // top: ${-hShadow} ${vShadowTop}
        // bottom: ${hShadow} ${vShadowBottom}

        // `);

        const style = `text-shadow: ${-hShadow}px ${vShadowTop}px ${blurRadius}px ${shadowColorTop}, ${hShadow}px ${vShadowBottom}px ${blurRadius}px ${shadowColorBottom}; color: ${textColor}`;
        styleArr.push(style);

        setTimeout(() => {
          addBoolean
            ? char.setAttribute('style', `${styleArr[i]}`)
            : char.removeAttribute('style');
        }, (timeout += speed));

        vShadowTop -= pastHalfway * shadowIncrement;
        vShadowBottom += pastHalfway * shadowIncrement;
      });
    };

    const { speedIncrement, timeBetweenDirectionChg } = sparkleOptions;
    let { charOffset, timeBetweenSparkles } = sparkleOptions;

    if (charOffset > charArr.length) charOffset = charArr.length;

    const minimumTimeBetweenSparkles =
      (charArr.length + charOffset) * speedIncrement * 2 +
      timeBetweenDirectionChg;

    if (timeBetweenSparkles < minimumTimeBetweenSparkles)
      timeBetweenSparkles = minimumTimeBetweenSparkles;

    loop(true, true, speedIncrement);
    timeout -= (charArr.length - charOffset) * speedIncrement;
    loop(true, false, speedIncrement);
    timeout += timeBetweenDirectionChg;
    loop(false, true, speedIncrement);
    timeout -= (charArr.length - charOffset) * speedIncrement;
    loop(false, false, speedIncrement);

    setTimeout(() => {
      sparkle();
    }, timeBetweenSparkles);
  }, []);

  const startSparkle = useCallback(() => {
    setTimeout(() => {
      sparkle();
    }, (randomTimeTotalRef.current += 1750));
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
