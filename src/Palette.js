import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

const Palette = ({ palette, ...rest }) => {
  const [level, setLevel] = useState(500);

  const { colors } = palette;

  const changeLevel = newLevel => setLevel(newLevel);

  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} />
      <div className="Palette-colors">
        {colors[level].map(color => (
          <ColorBox {...color} key={color.name} />
        ))}
      </div>
      {/* footer */}
    </div>
  );
};

export default Palette;
