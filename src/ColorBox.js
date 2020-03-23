import React from 'react';
import './ColorBox.css';

const ColorBox = ({ color, name }) => {
  return (
    <div className="ColorBox" style={{ background: color }}>
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
      </div>
      <button className="copy-button">Copy</button>
      <span className="see-more">More</span>
    </div>
  );
};

export default ColorBox;
