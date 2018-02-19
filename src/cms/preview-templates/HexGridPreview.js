import React from 'react';
import Hex from '../../components/Hex.js';
import HexGrid from '../../components/HexGrid.js';

const HexGridPreview = ({ entry }) => {
  let hexes = entry.getIn(['data', 'hexes']);
  hexes = hexes ? hexes.toJS() : [];
  return (
    <HexGrid
      hexes={hexes}
      n={entry.getIn(['data', 'n']) || 5}
      alt={entry.getIn(['data', 'alt']) || false} />
  )
};

export default HexGridPreview;
