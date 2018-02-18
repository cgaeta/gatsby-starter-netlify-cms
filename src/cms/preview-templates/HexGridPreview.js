import React from 'react';
import Hex from '../../components/Hex.js';
import HexGrid from '../../components/HexGrid.js';

const HexGridPreview = ({ entry }) => {
  let test = entry.getIn(['data', 'hexes']);
  return (
    <HexGrid hex={entry.getIn(['data', 'hexes'])} n={entry.getIn(['data', 'n'])} />
  )
};

export default HexGridPreview;
