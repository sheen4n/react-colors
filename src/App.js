import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SingleColorPalette from './SingleColorPalette';
import PaletteList from './PaletteList';
import Palette from './Palette';
import NewPaletteForm from './NewPaletteForm';

import { Provider as PaletteProvider } from './context/PaletteContext';

function App() {
  return (
    <PaletteProvider>
      <Switch>
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={SingleColorPalette}
        />
        <Route exact path='/' render={() => <PaletteList />} />
        <Route exact path='/palette/new' render={NewPaletteForm} />
        <Route exact path='/palette/:id' render={Palette} />
      </Switch>
    </PaletteProvider>
  );
}

export default App;
