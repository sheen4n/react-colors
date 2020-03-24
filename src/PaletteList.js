import React from 'react';
import seedColors from './seedColors';
import { Link } from 'react-router-dom';

const PaletteList = () => {
  const palettes = seedColors;
  console.log(palettes);

  return (
    <div>
      {palettes.map(palette => (
        <p>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  );
};

export default PaletteList;
