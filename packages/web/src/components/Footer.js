import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  background: #222;
  color: #a9a9a9;
`;

function Footer() {
  return <Container className="pa3">Footer</Container>;
}

export default Footer;
