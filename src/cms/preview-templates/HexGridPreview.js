import React from 'react';
import Hex from '../../components/Hex.js';
import HexGrid from '../../components/HexGrid.js';

const HexGridPreview = ({ entry }) => {
  let test = entry.getIn(['data', 'hexes']);
  return (
    <div>
      <pre>{JSON.stringify(test, null, 2)}</pre>
      <pre>{JSON.stringify(test.toJS(), null, 2)}</pre>
      {test.toJS().map(hex =>
        <pre>{JSON.stringify(hex, null, 2)}</pre>
      )}
    </div>
  )
};

export default HexGridPreview;
