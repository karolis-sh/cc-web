import styled from 'styled-components';

const Wrapper = styled.h1`
  color: ${props => props.theme.color.accent1};
  text-align: center;
  font-size: 1.5rem;
  text-decoration: underline;
  font-weight: bold;
`;

export default Wrapper;
