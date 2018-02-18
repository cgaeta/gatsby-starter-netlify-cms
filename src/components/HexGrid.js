import React from 'react';
import Hex from './Hex.js';

const HexGrid = ({hexes, n}) => {
  return (
    <div className="hexGrid" style={{
      display: "flex"
    }}>
      {hexes.map(hex =>
        <Hex {...hex} n={n} />
      )}
    </div>
  )
}

export default HexGrid;
