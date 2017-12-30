import React from 'react';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { media } from '../style';
import LanguageSwitcher from './LanguageSwitcher';

const HeaderWrapper = styled.header`
  display: flex;

  > *:first-child {
    flex: 1;
  }

  ${media.notSmall`
    flex-direction: column-reverse;
  `};
`;

function Header() {
  return (
    <HeaderWrapper>
      <div className="container">
        <Link to="/">
          <FormattedMessage id="header.nav.home" />
        </Link>{' '}
        <Link to="/projects">
          <FormattedMessage id="header.nav.projects" />
        </Link>{' '}
        <Link to="/contacts">
          <FormattedMessage id="header.nav.contacts" />
        </Link>
      </div>
      <LanguageSwitcher />
    </HeaderWrapper>
  );
}

export default Header;
