import React from 'react';
import Link from 'gatsby-link';

import { LocaleSwitcher } from '../i18n/components';

function Header() {
  return (
    <header className="pa3">
      <Link to="/">Home</Link> <Link to="/projects">Projects</Link>{' '}
      <Link to="/contacts">Contacts</Link>
      <LocaleSwitcher
        render={({ locale, setLocale }) => (
          <div className="ml3" style={{ display: 'inline-block' }}>
            <div>Locale - {locale}</div>
            <div>
              <button onClick={() => setLocale('en')}>EN</button>
              <button onClick={() => setLocale('sv')}>SV</button>
            </div>
          </div>
        )}
      />
    </header>
  );
}

export default Header;
