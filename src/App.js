import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SingleColorPalette from './SingleColorPalette';
import PaletteList from './PaletteList';
import Palette from './Palette';
import NewPaletteForm from './NewPaletteForm';

import { Provider as PaletteProvider } from './context/PaletteContext';
import { Provider as NewPaletteFormProvider } from './context/NewPaletteFormContext';

function App() {
  return (
    <NewPaletteFormProvider>
      <PaletteProvider>
        <Switch>
          <Route
            exact
            path='/palette/:paletteId/:colorId'
            render={SingleColorPalette}
          />
          <Route exact path='/home' render={() => <PaletteList />} />
          <Route exact path='/palette/new' render={NewPaletteForm} />
          <Route exact path='/palette/:id' render={Palette} />
          <Redirect
            exact
            from='/'
            to='/home'
            component={() => <PaletteList />}
          />

          <Redirect to='/home' />
        </Switch>
      </PaletteProvider>
    </NewPaletteFormProvider>
  );
}

export default App;
