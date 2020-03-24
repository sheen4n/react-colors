import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import seedColors from './seedColors';
import generatePalette from './utils/colorHelper';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

const SingleColorPalette = ({ match }) => {
  const [format, setFormat] = useState('hex');

  let palette = { ...seedColors.find(p => p.id === match.params.paletteId) };

  palette.colors = [
    { ...palette }.colors.find(
      element => element.name.toLowerCase() === match.params.colorId
    )
  ];

  const { colors: singlePaletteColors, emoji, paletteName } = generatePalette(
    palette
  );
  console.log(generatePalette(palette));

  const colorArray = Object.keys(singlePaletteColors).map(
    k => singlePaletteColors[k][0]
  );

  const changeFormat = e => setFormat(e.target.value);

  return (
    <div className='Palette'>
      <Navbar showSlider={false} format={format} changeFormat={changeFormat} />
      <div className='Palette-colors'>
        {colorArray.map(c => (
          <ColorBox {...c} showMore={false} format={format} />
        ))}
      </div>
      <PaletteFooter emoji={emoji} paletteName={paletteName} />
    </div>
  );
};

export default withRouter(SingleColorPalette);
