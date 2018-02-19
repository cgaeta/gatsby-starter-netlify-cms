import React from 'react';
import Hex from './Hex.js';

const longShort = (idx, len) => idx % (2 * len - 1) === len;
const shortLong = (idx, len) => idx % (2 * len - 1) === 0;

const HexGrid = ({hexes = [], count, alt}) => {
  count = parseInt(count, 10);
  return (
    <div className="hexGrid" style={{
      display: "flex",
      flexWrap: "wrap"
    }}>
      {hexes.map((hex, i) => {
          if (!hex.count) {
            hex.count = count;
          }
          return <Hex
            {...hex}
            size={count}
            indent={alt ? shortLong(i,count) : longShort(i,count)}/>
        }
      )}
    </div>
  )
}

export default HexGrid;
