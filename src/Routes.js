import React from 'react';
import { Route, Switch } from 'react-router';
import { PokemonInfo } from './PokemonInfo';
import { PokemonSearch } from './PokemonSearch';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <PokemonSearch />
      </Route>
      <Route path='/pokemon/:pokemonName'>
        <PokemonInfo />
      </Route>
    </Switch>
  );
};
