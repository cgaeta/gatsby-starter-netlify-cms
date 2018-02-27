import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';
import '../components/Hex.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="ChrisGaetaUX"
      meta={[
        { itemprop: 'name', content: "ChrisGaetaUX" },
        { name: 'description', content: "This is a test" },
        { "http-equiv": "Content-Security-Policy", content: "default-src 'self'" },
        { name: 'twitter:site', content: '@cgaeta' },
        { name: 'twitter:title', content: "ChrisGaetaUX"},
        { name: 'og:title', content: "ChrisGaetaUX"}
      ]} />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
