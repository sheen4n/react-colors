import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

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

  const {
    colors: singlePaletteColors,
    emoji,
    paletteName,
    id: paletteId
  } = generatePalette(palette);

  const colorArray = Object.keys(singlePaletteColors)
    .filter(k => k !== '50')
    .map(k => singlePaletteColors[k][0]);

  const changeFormat = e => setFormat(e.target.value);

  return (
    <div className='SingleColorPalette Palette'>
      <Navbar showSlider={false} format={format} changeFormat={changeFormat} />
      <div className='Palette-colors'>
        {colorArray.map(color => (
          <ColorBox
            {...color}
            showMore={false}
            format={format}
            key={color.name}
          />
        ))}
        <div className='go-back ColorBox'>
          <Link to={`/palette/${paletteId}`} className='back-button'>
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter emoji={emoji} paletteName={paletteName} />
    </div>
  );
};

export default withRouter(SingleColorPalette);
