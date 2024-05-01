import React, { useState, useEffect } from 'react';

export const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h2>Размеры окна</h2>
      <p>Ширина: {windowSize.width}px</p>
      <p>Высота: {windowSize.height}px</p>
    </div>
  );
};
