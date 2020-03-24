import React from 'react';
import seedColors from './seedColors';
import MiniPalette from './MiniPalette';

const PaletteList = () => {
  const palettes = seedColors;

  return (
    <div>
      {palettes.map(palette => (
        <MiniPalette {...palette} />
      ))}
    </div>
  );
};

export default PaletteList;
