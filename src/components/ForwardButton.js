import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import cx from 'classnames';

import FAIcon from './FAIcon';

const Wrapper = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.color.gray2};
  text-decoration: none;
  border-radius: 2px;

  > span:first-child {
    color: white;
  }

  > * {
    vertical-align: middle;
  }
`;

function ForwardButton({ className, url, text }) {
  return (
    <Wrapper className={cx('shadow pv1 ph3', className)} to={url}>
      <span className="fs3">{text}</span>
      <FAIcon type="angle-double-right" className="color-accent-1 fa-2x ml3" />
    </Wrapper>
  );
}

ForwardButton.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
};

ForwardButton.defaultProps = {
  className: undefined,
};

export default ForwardButton;
