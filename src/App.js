import React from 'react';
import './App.css';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' render={() => <h1>Palette list goes here!</h1>} />
        <Route exact path='/palette/:id' render={Palette} />
      </Switch>

      {/* <div className='App'>
        <Palette palette={generatePalette(seedColors[4])} />
      </div> */}
    </>
  );
}

export default App;
