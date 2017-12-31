import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import { TranslateProvider } from '../i18n/components';
import { Header, Footer } from '../components';
import { theme } from '../style';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

function Wrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <TranslateProvider>
        <Container>
          <Helmet
            title="ESC"
            meta={[
              { name: 'description', content: 'ESC' },
              { name: 'keywords', content: 'ESC' },
            ]}
          >
            <html lang="en" />
            <meta httpEquiv="Cache-control" content="public" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          </Helmet>
          <Header />
          <Content>
            <div className="container ph2">{children()}</div>
          </Content>
          <Footer />
        </Container>
      </TranslateProvider>
    </ThemeProvider>
  );
}

Wrapper.propTypes = {
  children: PropTypes.func,
};

Wrapper.defaultProps = {
  children: undefined,
};

export default Wrapper;
