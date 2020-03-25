import React from 'react';
import seedColors from './seedColors';
import MiniPalette from './MiniPalette';

import { withRouter } from 'react-router-dom';

import './styles/PaletteList.css';

const PaletteList = ({ history }) => {
  const palettes = [...seedColors];

  const goToPalette = id => () => history.push(`/palette/${id}`);

  return (
    <div className='PaletteList'>
      <div className='PaletteList-container'>
        <nav className='PaletteList-header'>
          <h1>React Colors</h1>
        </nav>
        <div className='PaletteList-palettes-container'>
          {palettes.map(palette => (
            <MiniPalette
              {...palette}
              goToPalette={goToPalette(palette.id)}
              key={palette.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(PaletteList);
