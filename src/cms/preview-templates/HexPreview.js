import React from 'react';
import Hex from '../../components/Hex.js';

const HexPreview = ({ entry }) => {
  return (
    <Hex
      src={entry.getIn(['data', 'src'])}
      text={entry.getIn(['data', 'text'])}
      title={entry.getIn(['data', 'title'])}
      size={entry.getIn(['data', 'size'])}
      alt={entry.getIn(['data', 'alt'])} />
  )
};

export default HexPreview;
