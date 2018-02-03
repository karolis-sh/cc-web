import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '../style';
import { FAIcon } from './';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  align-items: normal;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: rgba(34, 34, 34, 0.05);

  ${media.notSmall`
    width: 45%;
  `};
`;

function Services({ items }) {
  return (
    <Wrapper>
      {items.map(item => (
        <Box key={item.title} className="shadow pv2 ph3 mv2">
          <FAIcon type="chevron-right" className="mr3" />
          {item.title}
        </Box>
      ))}
    </Wrapper>
  );
}

Services.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Services;
