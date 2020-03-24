import React, { useState } from 'react';
import ColorBox from './ColorBox';
import seedColors from './seedColors';
import generatePalette from './utils/colorHelper';

import './Palette.css';
import Navbar from './Navbar';
import { withRouter } from 'react-router-dom';

const Palette = ({ match }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const existingPalette = seedColors.find(p => p.id === match.params.id);

  if (!existingPalette) return <div>Invalid Palette</div>;

  const palette = generatePalette(existingPalette);

  const { colors, paletteName, emoji } = palette;

  const changeLevel = newLevel => setLevel(newLevel);

  const changeFormat = e => setFormat(e.target.value);

  return (
    <div className='Palette'>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        format={format}
        changeFormat={changeFormat}
      />
      <div className='Palette-colors'>
        {colors[level].map(color => (
          <ColorBox {...color} format={format} key={color.name} />
        ))}
      </div>
      <footer className='Palette-footer'>
        {paletteName}
        <span className='emoji'>{emoji}</span>
      </footer>
    </div>
  );
};

export default withRouter(Palette);
