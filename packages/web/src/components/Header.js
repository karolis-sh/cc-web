import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import data from '../data';
import { media } from '../style';
import HamburgerMenu from './HamburgerMenu';
import LanguageSwitcher from './LanguageSwitcher';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;

  > *:first-child {
    flex: 1;
  }

  ${media.notSmall`
    flex-direction: column-reverse;
    align-items: initial;
  `};
`;

const Brand = styled(Link)`
  color: ${props => props.theme.color.black1};
  text-decoration: none;
`;

function Header() {
  return (
    <HeaderWrapper className="ma2">
      <div className="container ph2">
        <Brand to="/" className="fs3 b">
          {data.companyName}
        </Brand>
      </div>
      <LanguageSwitcher />
      <HamburgerMenu />
    </HeaderWrapper>
  );
}

export default Header;
