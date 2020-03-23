import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Palette = ({ palette, ...rest }) => {
  const [level, setLevel] = useState(500);

  const { colors } = palette;

  const changeLevel = newLevel => setLevel(newLevel);

  console.log(colors);

  return (
    <div className="Palette">
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        step={100}
        onAfterChange={changeLevel}
      />
      {/* navbar */}
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
