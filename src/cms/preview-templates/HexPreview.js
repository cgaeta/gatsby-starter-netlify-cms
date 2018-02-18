import React from 'react';
import { Hex } from '../../components/Hex.js';

const HexPreview = ({ entry }) => (
  <pre>{JSON.stringify(entry, null, 2)}</pre>
);

export default HexPreview;
