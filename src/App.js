import React from 'react';
import './App.css';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' render={() => <PaletteList />} />
        <Route exact path='/palette/:id' render={Palette} />
      </Switch>

      {/* <div className='App'>
        <Palette palette={generatePalette(seedColors[4])} />
      </div> */}
    </>
  );
}

export default App;
