import React from 'react';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import data from '../data';
import { media } from '../style';
import HamburgerMenu from './HamburgerMenu';
import LanguageSwitcher from './LanguageSwitcher';

const Wrapper = styled.div`
  ${media.notSmall`
    background-image: url('/images/header-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  `};
`;

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

const SmallNav = styled.div`
  ${media.notSmall`
    display: none;
  `};
`;

const NotSmallNav = styled.div`
  display: none;
  background: rgba(255, 255, 255, 0.9);
  align-items: center;

  > *:first-child {
    flex: 1;
  }

  ${media.notSmall`
    display: flex;
  `};
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.color.black1};
  text-decoration: none;

  &.active {
    color: white;
    background: ${props => props.theme.color.gray3};
  }
`;

function Header() {
  return (
    <Wrapper>
      <HeaderWrapper className="ma2">
        <div className="container ph2 pb6-ns">
          <SmallNav>
            <Brand to="/" className="fs3 b">
              {data.companyName}
            </Brand>
          </SmallNav>
          <NotSmallNav className="pv2 ph3 mb4">
            <Brand to="/" className="fs4 b">
              {data.companyName}
            </Brand>
            <NavLink exact to="/" className="pa2 b" activeClassName="active">
              <FormattedMessage id="header.nav.home" />
            </NavLink>
            <NavLink to="/projects" className="pa2 b" activeClassName="active">
              <FormattedMessage id="header.nav.projects" />
            </NavLink>
            <NavLink to="/contacts" className="pa2 b" activeClassName="active">
              <FormattedMessage id="header.nav.contacts" />
            </NavLink>
          </NotSmallNav>
        </div>
        <LanguageSwitcher />
        <HamburgerMenu />
      </HeaderWrapper>
    </Wrapper>
  );
}

export default Header;
