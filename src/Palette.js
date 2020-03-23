import React, { useState } from 'react';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import './Palette.css';
import Slider from 'rc-slider';

const Palette = ({ palette, ...rest }) => {
  const [level, setLevel] = useState(500);

  const { colors } = palette;

  const changeLevel = newLevel => setLevel(newLevel);

  console.log(colors);

  return (
    <div className="Palette">
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={changeLevel}
        />
      </div>

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
