import { css } from 'styled-components';

const makeQuery = screen => (...args) => css`
  @media screen and ${screen} {
    ${css(...args)};
  }
`;

const media = {
  notSmall: makeQuery('(min-width: 30em)'),
  medium: makeQuery('(min-width: 30em) and (max-width: 60em)'),
  large: makeQuery('(min-width: 60em)'),
};

export default media;
