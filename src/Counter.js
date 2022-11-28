import React, { useState } from 'react';

const CounterFromProps = (props) => {
  return <h2>{props.counter}</h2>;
};

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handlePlusClick = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleMinusClick = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handlePlusClick}>Somar</button>
      <button onClick={handleMinusClick}>Subtrair</button>
      <CounterFromProps counter={counter}></CounterFromProps>
    </div>
  );
};
