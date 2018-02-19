import React from 'react';
import HexGrid from './HexGrid.js';

import './Hex.scss';

const sixtyDeg = Math.PI / 3;

const Hex = ({src, title, text, hexes = [], size, count, indent, alternate}) => {

  return (
  <div className="hex" style={{
    width: `calc(100% / ${size})`,
    marginLeft: (indent ? `calc(100% / (${size}*2))` : "0")
  }}>
    <div className="hexIn" style={{
      paddingBottom: `calc(96% / ${Math.sin(sixtyDeg)})`,
    }}>
      <div className="hexLink">
        <div className="nestedGrid">
          <HexGrid
            hexes={hexes}
            count={count},
            alternate={alternate} />
        </div>
        <img src={src} alt />
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
    <div className="hexAfter" style={{
      paddingBottom: `calc(100% / ${Math.tan(sixtyDeg)} * 1.5)`
    }}>
    </div>
  </div>
)};

export default Hex;
