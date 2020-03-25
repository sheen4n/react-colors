import React, { useContext } from 'react';
import MiniPalette from './MiniPalette';

import { withRouter, Link } from 'react-router-dom';

import './styles/PaletteList.css';

import { Context } from './context/PaletteContext';

const PaletteList = ({ history }) => {
  const { state: palettes } = useContext(Context);

  const goToPalette = id => () => history.push(`/palette/${id}`);

  return (
    <div className='PaletteList'>
      <div className='PaletteList-container'>
        <nav className='PaletteList-header'>
          <h1>React Colors</h1>
          <Link to='/palette/new'>Create Palette</Link>
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
