import React, { useState, useRef, useEffect } from 'react';
import style from '../MainScreenCalculator.module.css';

const CircularRangeInput = ({ value, onChange, min, max }) => {
  const [angle, setAngle] = useState((value - min) / (max - min) * 360);
  const circleRef = useRef(null);

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0);
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  };

  const handleMouseMove = (e) => {
    const rect = circleRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const newAngle = Math.atan2(y, x) * (180 / Math.PI) + 90;
    const boundedAngle = (newAngle + 360) % 360;
    setAngle(boundedAngle);
    const newValue = Math.round(boundedAngle / 360 * (max - min) + min);
    onChange(newValue);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    const newAngle = (value - min) / (max - min) * 360;
    setAngle(newAngle);
  }, [value, min, max]);

  return (
    <div className={style.circular_range_container} ref={circleRef}>
        <input onChange={onChange} value={value} type='text' className={style.circular_range_indicator} />
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" stroke="#8f8f8f" strokeWidth="2" fill="none" />
        <path
          d={describeArc(100, 100, 90, 0, angle)}
          fill="none"
          stroke="#ffa500"
          strokeWidth="2"
        />
        <circle 
            cx={100 + 90 * Math.cos((angle - 90) * (Math.PI / 180))}
            cy={100 + 90 * Math.sin((angle - 90) * (Math.PI / 180))}
            fill='none' stroke='#ffa500' strokeWidth='1' opacity={'.5'}>
            <animate 
                attributeName='r'
                values='0;15;0'
                dur='2s'
                repeatCount={'indefinite'}
            />
            
        </circle>
        
        <circle cx={100} cy={10} r={4} fill='#ffa500'/>
        <circle
          cx={100 + 90 * Math.cos((angle - 90) * (Math.PI / 180))}
          cy={100 + 90 * Math.sin((angle - 90) * (Math.PI / 180))}
          r="7"
          fill="#ffa500"
          onMouseDown={handleMouseDown}
          className={style.circle_active}
          style={{ cursor: 'pointer' }}
        />
      </svg>
      
    </div>
  );
};

export default CircularRangeInput;
