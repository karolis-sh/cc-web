import React from 'react';
import Link from 'gatsby-link';

function Header() {
  return (
    <header className="pa3">
      <Link to="/">Home</Link> <Link to="/projects">Projects</Link>{' '}
      <Link to="/contacts">Contacts</Link>
    </header>
  );
}

export default Header;
