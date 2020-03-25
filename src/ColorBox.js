import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import './styles/ColorBox.css';

const ColorBox = ({ name, format, showMore, ...color }) => {
  const [copied, setCopied] = useState(false);
  const colorCode = color[format];

  const showCopyTransition = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isDarkColor = chroma(colorCode).luminance() <= 0.1;
  const isLightColor = chroma(colorCode).luminance() >= 0.6;

  return (
    <CopyToClipboard text={colorCode} onCopy={showCopyTransition}>
      <div className='ColorBox' style={{ background: colorCode }}>
        <div
          className={`copy-overlay ${copied && 'show'}`}
          style={{ background: colorCode }}
        />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1 className={`${isLightColor && 'dark-text'}`}>COPIED</h1>
          <p className={`${isLightColor && 'dark-text'}`}>{colorCode}</p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span className={isDarkColor ? 'light-text' : ''}>{name}</span>
          </div>
        </div>
        <button className='copy-button'>Copy</button>
        {showMore && (
          <Link
            to={`/palette/${color.paletteId}/${color.id}`}
            onClick={e => e.stopPropagation()}
          >
            <span className={`see-more ${isLightColor && 'dark-text'}`}>
              More
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
