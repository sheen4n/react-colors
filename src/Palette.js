import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

const Palette = ({ palette, ...rest }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const { colors } = palette;

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
      {/* footer */}
    </div>
  );
};

export default Palette;
