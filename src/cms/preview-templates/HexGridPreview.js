import React from 'react';
import Hex from '../../components/Hex.js';
import HexGrid from '../../components/HexGrid.js';

const HexGridPreview = ({ entry }) => {
  return (
    <HexGrid hexes={entry.getIn(['data', 'hexes']).toJS()} n={entry.getIn(['data', 'n'])} />
  )
};

export default HexGridPreview;