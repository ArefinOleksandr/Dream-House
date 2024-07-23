import React, { forwardRef, useEffect, useState } from 'react';

import styleCss from '../Sidebar.module.css'

const Icon = forwardRef(({ id, isIntersecting, href, src }, ref) => {
  const [wasAnimated, setWasAnimated] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      setWasAnimated(true);
      console.log(wasAnimated);
    }
  }, [isIntersecting, wasAnimated]);

  const style = {
    opacity: isIntersecting || wasAnimated ? 1 : 0,
    transition: 'opacity 0.4s ease-in',
  };

  return (
    <a style={style} href={href} className={'icon ' + style.icon} id={id} ref={ref}>
      <img className={styleCss.iconImage} src={src} alt="" />
    </a>
  );
});

export default Icon;
