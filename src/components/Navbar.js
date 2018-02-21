import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = ({ brand, links }) => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to={brand.url} className="navbar-item">
          {brand.img ?
            <img src={logo} style={{ width: '88px' }} alt={brand.name} />
            :
            <h1 className="brand">{brand.name}</h1>
          }
        </Link>
      </div>
      <div className="navbar-start">
        {links.map(({text, url}) =>
          <Link to={url} className="navbar-item">{text}</Link>
        )}
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
