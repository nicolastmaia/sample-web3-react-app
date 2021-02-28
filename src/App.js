import { CounterBy4 } from './Counter';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';

const customAxios = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' });
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
