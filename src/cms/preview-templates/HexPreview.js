import React from 'react';
import { Hex } from '../../components/Hex.js';

const HexPreview = ({ entry }) => {
  return (
    <Hex
      src={entry.getIn(['data', 'src'])}
      text={entry.getIn(['data', 'text'])}
      title={entry.getIn(['data', 'title'])}
      n={entry.getIn(['data', 'n'])} />
  )
};

export default HexPreview;
