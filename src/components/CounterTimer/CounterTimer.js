import React, { useState, useEffect } from 'react';

export const CounterTimer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h2>Таймер: {count}</h2>
    </div>
  );
};
