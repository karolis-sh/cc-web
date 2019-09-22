import React from 'react';
import PropTypes from 'prop-types';
import Link, { withPrefix } from 'gatsby-link';
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

    > div {
      height: 100%;
      background: linear-gradient(
        to top,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.25) 0.5rem,
        rgba(255, 255, 255, 0) 3rem
      );
    }
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
  color: ${({ theme }) => theme.color.black1};
  text-decoration: none;
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
  color: ${({ theme }) => theme.color.black1};
  text-decoration: none;

  &.active {
    color: white;
    background: ${({ theme }) => theme.color.gray3};
  }
`;

const WelcomeContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2px;
  width: 50%;
`;

function Header({ pathname }) {
  // eslint-disable-next-line no-restricted-globals
  const showWelcome = pathname === withPrefix('/');
  return (
    <Wrapper>
      <div>
        <HeaderWrapper className="ma2">
          <div className="container ph2">
            <div className="dn-ns">
              <Brand to="/" className="fs3 b">
                {data.companyName}
              </Brand>
            </div>
            <NotSmallNav className="pv2 ph3 mb4">
              <Brand to="/" className="fs4 b mr3">
                {data.companyName}
              </Brand>
              <NavLink to="/" className="pa2 b" activeClassName="active">
                <FormattedMessage id="header.nav.home" />
              </NavLink>
              <NavLink
                to="/projects/"
                className="pa2 b"
                activeClassName="active"
              >
                <FormattedMessage id="header.nav.projects" />
              </NavLink>
              <NavLink
                to="/contacts/"
                className="pa2 b"
                activeClassName="active"
              >
                <FormattedMessage id="header.nav.contacts" />
              </NavLink>
            </NotSmallNav>
          </div>
          <LanguageSwitcher />
          <HamburgerMenu />
        </HeaderWrapper>
        {showWelcome && (
          <div className="container">
            <WelcomeContainer className="dn db-ns ml5 mt3 mb5 ph3 pv2">
              <h1 className="fs4">
                <FormattedMessage id="home.welcomeTitle" />
              </h1>
              <p className="tj">
                <FormattedMessage id="home.welcomeText" />
              </p>
            </WelcomeContainer>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
