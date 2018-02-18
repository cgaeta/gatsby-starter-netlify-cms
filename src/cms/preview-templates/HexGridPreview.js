import React from 'react';
import Hex from '../../components/Hex.js';

const HexGridPreview = ({ entry }) => {
  let test = entry.getIn(['data', 'hexes']);
  return (
    <pre>{JSON.stringify(test, null, 2}</pre>
  )
};

export default HexGridPreview;
