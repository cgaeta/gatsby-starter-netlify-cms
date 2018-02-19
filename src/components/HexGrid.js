import React from 'react';
import Hex from './Hex.js';

const HexGrid = ({hexes, n}) => {
  return (
    <div className="hexGrid" style={{
      display: "flex",
      flexWrap: "wrap
    }}>
      {hexes.map((hex, i) =>
        <Hex {...hex} n={n} indent={i % (n+1) === n}/>
      )}
    </div>
  )
}

export default HexGrid;
