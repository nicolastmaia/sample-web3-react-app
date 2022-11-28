import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState('');
  const history = useHistory();

  const handlePokemonInput = (event) => {
    setPokemonName(event.target.value);
  };

  const fetchPokemon = async () => {
    history.push(`/pokemon/${pokemonName}`);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') fetchPokemon();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Digite o nome do pokemon:</h1>
      <input
        type='text'
        onChange={handlePokemonInput}
        onKeyPress={handleEnterKeyPress}
      />
      <button onClick={fetchPokemon}>Buscar Pokemon</button>
    </div>
  );
};

export { PokemonSearch };
