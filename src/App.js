import React from 'react';
import './App.css';
import seedColors from './seedColors';
import Palette from './Palette';
import generatePalette from './utils/colorHelper';

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
