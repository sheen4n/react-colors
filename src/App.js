import React from 'react';
import './App.css';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

function App() {
  return (
    <>
      <Switch>
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={SingleColorPalette}
        />
        <Route exact path='/' render={() => <PaletteList />} />
        <Route exact path='/palette/:id' render={Palette} />
      </Switch>
    </>
  );
}

export default App;
