import React, { useState, useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';

import generatePalette from './utils/colorHelper';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import _ from 'lodash';

import { Context } from './context/PaletteContext';

const SingleColorPalette = ({ match }) => {
  const [format, setFormat] = useState('hex');

  const { state: palettes } = useContext(Context);

  const palette = palettes.find(p => p.id === match.params.paletteId);

  let deepClone = _.cloneDeep(palette);

  deepClone.colors = [
    deepClone.colors.find(
      element => element.name.toLowerCase() === match.params.colorId
    )
  ];

  const {
    colors: singlePaletteColors,
    emoji,
    paletteName,
    id: paletteId
  } = generatePalette(deepClone);

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
          <Link
            to={`/react-colors/palette/${paletteId}`}
            className='back-button'
          >
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter emoji={emoji} paletteName={paletteName} />
    </div>
  );
};

export default withRouter(SingleColorPalette);
