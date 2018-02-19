import React from 'react';
import Hex from '../../components/Hex.js';
import HexGrid from '../../components/HexGrid.js';

const HexGridPreview = ({ entry }) => {
  let hexes = entry.getIn(['data', 'hexes']);
  hexes = hexes ? hexes.toJS() : [];
  console.log(hexes);
  return (
    <HexGrid
      hexes={hexes}
      count={entry.getIn(['data', 'count']) || 5}
      alt={entry.getIn(['data', 'alt']) || false} />
  )
};

export default HexGridPreview;
