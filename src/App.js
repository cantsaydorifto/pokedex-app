import FirstPage from './components/FirstPage/FirstPage';
import { Route, Switch, useLocation } from 'react-router-dom';
import Pokedex from './components/Pokedex/Pokedex.js';
import { AnimatePresence } from 'framer-motion';
import Start from './components/Start/Start';
import Search from './components/Search/Search';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
//----

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/pokedex/:id'>
            <PokemonInfo />
          </Route>
          <Route path='/pokedex'>
            <Pokedex />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/start'>
            <Start />
          </Route>
          <Route path='/'>
            <FirstPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
