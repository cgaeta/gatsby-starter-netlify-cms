import React from 'react';
import Navbar from '../../components/Navbar.js';

const NavbarPreview = ({ entry }) => {
  let brand = entry.getIn(['data', 'brand']),
      links = entry.getIn(['data', 'links']);

  brand = brand ? brand.toJS() : { url:"/", name: "Homepage" };
  links = links ? links.toJS() : [];

  return (
    <Navbar brand={brand} links={links} />
  )
};

export default NavbarPreview;
