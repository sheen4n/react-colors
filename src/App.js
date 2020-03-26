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
            path='/react-colors/palette/:paletteId/:colorId'
            render={SingleColorPalette}
          />
          <Route exact path='/react-colors' render={() => <PaletteList />} />
          <Route
            exact
            path='/react-colors/palette/new'
            render={NewPaletteForm}
          />
          <Route exact path='/react-colors/palette/:id' render={Palette} />
          <Redirect to='/react-colors' />
        </Switch>
      </PaletteProvider>
    </NewPaletteFormProvider>
  );
}

export default App;
