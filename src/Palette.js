import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

const Palette = ({ colors, ...rest }) => {
  return (
    <div className="Palette">
      {/* navbar */}
      <div className="Palette-colors">
        {colors.map(color => (
          <ColorBox {...color} key={color.color} />
        ))}
      </div>
      {/* footer */}
    </div>
  );
};

export default Palette;
