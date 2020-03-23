import React from 'react';
import logo from './logo.svg';
import './App.css';
import seedColors from './seedColors';
import Palette from './Palette';

function App() {
  return (
    <div className="App">
      <Palette palette={...seedColors[4]} />
    </div>
  );
}

export default App;
