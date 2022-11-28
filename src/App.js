import { CounterBy4 } from './CounterBy4';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';

const App = () => {
  // demo of why it's better to use prevState when updating a state that depends on a previous value
  // return (
  //   <div>
  //     <CounterBy4/>
  //   </div>
  // );

  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
