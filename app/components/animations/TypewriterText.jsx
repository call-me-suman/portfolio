"use client";
import { TypeAnimation } from 'react-type-animation';

const TypewriterText = ({ 
  sequence, 
  speed = 50, 
  deletionSpeed = 50,
  repeat = 0,
  className = "",
  cursor = true 
}) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={speed}
      deletionSpeed={deletionSpeed}
      repeat={repeat}
      cursor={cursor}
      className={className}
    />
  );
};

export default TypewriterText;
