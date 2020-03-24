import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';
import { Link } from 'react-router-dom';

const ColorBox = ({ name, format, showMore, ...color }) => {
  const [copied, setCopied] = useState(false);
  const colorCode = color[format];

  const showCopyTransition = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={colorCode} onCopy={showCopyTransition}>
      <div className='ColorBox' style={{ background: colorCode }}>
        <div
          className={`copy-overlay ${copied && 'show'}`}
          style={{ background: colorCode }}
        />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>COPIED</h1>
          <p>{colorCode}</p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
        </div>
        <button className='copy-button'>Copy</button>
        {showMore && (
          <Link
            to={`/palette/${color.paletteId}/${color.id}`}
            onClick={e => e.stopPropagation()}
          >
            <span className='see-more'>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
