import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SingleColorPalette from './SingleColorPalette';
import PaletteList from './PaletteList';
import Palette from './Palette';

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
