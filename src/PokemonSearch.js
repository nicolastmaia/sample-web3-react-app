import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, useHistory } from 'react-router-dom';

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState('');
  const history = useHistory();

  // demo of why it's better to use prevState when updating a state that depends on a previous value
  // return (
  //   <div>
  //     <CounterBy4/>
  //   </div>
  // );

  const handlePokemonInput = (event) => {
    setPokemonName(event.target.value);
  };

  const fetchPokemon = async () => {
    try {
      history.push(`/pokemon/${pokemonName}`);
    } catch (error) {}
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') fetchPokemon();
  };

  return (
    <div>
      <h1>Nome do pokemon.</h1>
      <input
        onKeyPress={handleEnterKeyPress}
        type='text'
        onChange={handlePokemonInput}
      />
      <button onClick={fetchPokemon}>Fetch Pokemon Data</button>
    </div>
  );
};

export { PokemonSearch };
