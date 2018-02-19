import React from 'react';
import Hex from '../../components/Hex.js';

const HexPreview = ({ entry }) => {
  return (
    <Hex
      src={entry.getIn(['data', 'src'])}
      text={entry.getIn(['data', 'text'])}
      title={entry.getIn(['data', 'title'])}
      count={entry.getIn(['data', 'count'])} />
      size={entry.getIn(['data', 'size'])} />
  )
};

export default HexPreview;
