import React from 'react';
import Link from 'gatsby-link';

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
    </div>
  </nav>
);

export default Navbar;
