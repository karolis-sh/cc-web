import { Link } from 'gatsby';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { media } from '../style';

const Wrapper = styled.div`
  width: 26px;
  height: 20px;
  margin-right: 15px;
  margin-left: 15px;

  .bm-burger-button {
    position: fixed;
    width: 26px;
    height: 20px;
  }

  .bm-burger-bars {
    background: ${({ theme }) => theme.color.gray2};
  }

  .bm-menu-wrap {
    top: 0;
  }

  .bm-cross {
    background: white;
  }

  .bm-menu {
    background: ${({ theme }) => theme.color.gray3};
  }

  .bm-overlay {
    position: absolute;
    left: 0;
    top: 0;
  }

  ${media.notSmall`
    display: none;
  `};
`;

const StyledLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.accent1};
  }
`;

class HamburgerMenu extends React.Component {
  state = { isMenuOpen: false };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <Wrapper>
        <Menu isOpen={isMenuOpen} right width={200}>
          <div className="ph4 pv5">
            <StyledLink to="/" className="mb3">
              <FormattedMessage id="header.nav.home" />
            </StyledLink>
            <StyledLink to="/projects/" className="mb3">
              <FormattedMessage id="header.nav.projects" />
            </StyledLink>
            <StyledLink to="/contacts/">
              <FormattedMessage id="header.nav.contacts" />
            </StyledLink>
          </div>
        </Menu>
      </Wrapper>
    );
  }
}

export default HamburgerMenu;
