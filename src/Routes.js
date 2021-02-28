import { Route, Switch } from 'react-router';
import { PokemonSearch } from './PokemonSearch';
import { PokemonInfo } from './PokemonInfo';

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
