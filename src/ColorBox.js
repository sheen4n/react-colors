import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

const ColorBox = ({ hex, name }) => {
  const [copied, setCopied] = useState(false);

  const showCopyTransition = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={hex} onCopy={showCopyTransition}>
      <div className="ColorBox" style={{ background: hex }}>
        <div
          className={`copy-overlay ${copied && 'show'}`}
          style={{ background: hex }}
        />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>COPIED</h1>
          <p>{hex}</p>
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
