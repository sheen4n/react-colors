import React from 'react';
import './App.css';
import seedColors from './seedColors';
import Palette from './Palette';
import generatePalette from './utils/colorHelper';

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
