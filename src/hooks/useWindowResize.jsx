import { useState, useEffect } from 'react';

export const getWindowSize = () => {
  const { innerWidth } = window;
  return { innerWidth };
};

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [breakPoint, setBreakPoint] = useState('');
  

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const { innerWidth } = windowSize;
    if (innerWidth < 576) {
      setBreakPoint('xs');
    }
    if (innerWidth >= 576 && innerWidth < 768) {
      setBreakPoint('sm');
    }
    if (innerWidth >= 768 && innerWidth < 992) {
      setBreakPoint('md');
    }
    if (innerWidth >= 992 && innerWidth < 1200) {
      setBreakPoint('lg');
    }
    if (innerWidth >= 1200 && innerWidth < 1400) {
      setBreakPoint('xl');
    }
    if (innerWidth >= 1400) {
      setBreakPoint('xxl');
    }
  }, [windowSize.innerWidth]);
  return { breakPoint };
};

