import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const customAxios = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' });

export const PokemonInfo = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState({
    types: [],
    abilities: [],
    moves: [],
    sprites: [],
  });

  useEffect(() => {
    const loadPokemonInfo = async () => {
      try {
        const response = await customAxios.get(`pokemon/${pokemonName}`);
        if (response.data !== null) setPokemon(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadPokemonInfo();
  }, [pokemonName]);

  const PokemonTypes = () => {
    return (
      <ul>
        {pokemon.types.map((item) => {
          return <li>{item.type.name}</li>;
        })}
      </ul>
    );
  };

  const PokemonAbilities = () => {
    return (
      <ul>
        {pokemon.abilities.map((item) => {
          return <li>{item.ability.name}</li>;
        })}
      </ul>
    );
  };

  const PokemonMoves = () => {
    return (
      <ul>
        {pokemon.moves.map((item) => {
          return <li>{item.move.name}</li>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <img alt={pokemon.name || ''} src={pokemon.sprites.front_default} />
      <h3>Nome: {pokemon.name}</h3>
      <h3>Número na pokedex: {pokemon.id}</h3>

      <h3>Peso: {pokemon.weight}</h3>
      <h3>Altura: {pokemon.height}</h3>

      <h3>Tipo(s):</h3>
      <PokemonTypes />

      <h3>Habilidades:</h3>
      <PokemonAbilities />

      <h3>Movimentos:</h3>
      <PokemonMoves />
    </div>
  );
};
