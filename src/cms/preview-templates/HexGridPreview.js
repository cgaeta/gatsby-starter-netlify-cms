import React from 'react';
import Hex from '../../components/Hex.js';
import HexGrid from '../../components/HexGrid.js';

const HexGridPreview = ({ entry }) => {
  
  console.log('creating HexGrid', entry.getIn(['data', 'hexes']).toJS(), entry.getIn(['data', 'n']));
  return (
    <HexGrid hex={entry.getIn(['data', 'hexes']).toJS()} n={entry.getIn(['data', 'n'])} />
  )
};

export default HexGridPreview;
