import React from 'react';
import { Hex } from '../../components/Hex.js';

const HexPreview = ({ entry }) => {
  
  let test = {
    src: entry.getIn(['data', 'src']),
    text: entry.getIn(['data', 'text']),
    title: entry.getIn(['data', 'title']),
    n: entry.getIn(['data', 'n'])
  />
  
  return (
    <pre>{JSON.stringify(test, null, 2)}</pre>
  )
};

export default HexPreview;
