import React, { useState, useContext } from 'react';
import ColorBox from './ColorBox';

import generatePalette from './utils/colorHelper';

import './styles/Palette.css';
import Navbar from './Navbar';
import { withRouter, Redirect } from 'react-router-dom';
import PaletteFooter from './PaletteFooter';

import { Context } from './context/PaletteContext';

const Palette = ({ match }) => {
  const { state: palettes } = useContext(Context);

  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const existingPalette = palettes.find(p => p.id === match.params.id);
  if (!existingPalette) return <Redirect to='/react-colors' />;

  const palette = generatePalette(existingPalette);

  const { colors, paletteName, emoji, id: paletteId } = palette;

  const changeLevel = newLevel => setLevel(newLevel);

  const changeFormat = e => setFormat(e.target.value);

  return (
    <div className='Palette'>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        format={format}
        changeFormat={changeFormat}
        showSlider={true}
      />
      <div className='Palette-colors'>
        {colors[level].map(color => (
          <ColorBox
            {...color}
            format={format}
            key={color.name}
            paletteId={paletteId}
            showMore={true}
          />
        ))}
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default withRouter(Palette);
