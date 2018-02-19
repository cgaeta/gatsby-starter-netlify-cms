import React from 'react';
import Hex from './Hex.js';

const HexGrid = ({hexes = [], n}) => {
  n = parseInt(n, 10);
  return (
    <div className="hexGrid" style={{
      display: "flex",
      flexWrap: "wrap"
    }}>
      {hexes.map((hex, i) => {
          console.log("building hex:", i+1, "indent?", ((i+1) % (2*n-1) === n+1));
          console.log("n:", n, "(i+1) % (2*n-1)", (i+1) % (2*n-1), "n+1", n+1, "((i+1) % (2*n-1) === n+1):", ((i+1) % (2*n-1) === n+1));
          return <Hex {...hex} n={n} indent={(i+1) % (2*n-1) === (n < 3 ? 0 : n+1)}/>
        }
      )}
    </div>
  )
}

export default HexGrid;
