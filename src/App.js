import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Counter } from './Counter';
import { CounterBy4 } from './CounterBy4';
import { Routes } from './Routes';

const App = (props) => {
  if (props.choose === 0) {
    //A simple counter
    return (
      <div>
        <Counter />
      </div>
    );
  } else if (props.choose === 1) {
    // demo of why it's better to use prevState when updating a state that depends on a previous value
    return (
      <div>
        <CounterBy4 />
      </div>
    );
  } else {
    // demo of using react-router-dom and axios
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
};

export default App;
