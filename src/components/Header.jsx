// Header.js
import React from 'react';
import './Header.scss'; // Assuming you have a SCSS file for styles

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;