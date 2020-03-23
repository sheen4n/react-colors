import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

const ColorBox = ({ color, name }) => {
  const [copied, setCopied] = useState(false);

  const showCopyTransition = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={color} onCopy={showCopyTransition}>
      <div className="ColorBox" style={{ background: color }}>
        <div
          className={`copy-overlay ${copied && 'show'}`}
          style={{ background: color }}
        />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>COPIED</h1>
          <p>{color}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
        </div>
        <button className="copy-button">Copy</button>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
