import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ seconds, initialStyle, finalStyle, children, isAnimated }) => {
  const [currentStyle, setCurrentStyle] = useState(initialStyle);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!hasAnimated.current && !isAnimated) {
      const timerId = setTimeout(() => {
        setCurrentStyle(finalStyle);
        hasAnimated.current = true;
      }, seconds);

      return () => clearTimeout(timerId);
    }
  }, [seconds, finalStyle, isAnimated]);

  if (isAnimated) {
    return children; // Возвращаем дочерний компонент без изменений
  }

  return React.cloneElement(children, { className: currentStyle });
};

export default Timer;
