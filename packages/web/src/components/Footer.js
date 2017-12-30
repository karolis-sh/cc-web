import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  background: #222;
  color: #a9a9a9;
`;

function Footer() {
  return (
    <Container className="pa3">
      <div className="container">Footer</div>
    </Container>
  );
}

export default Footer;
