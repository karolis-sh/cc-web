import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { TranslateProvider } from '../i18n/components';
import { Header, Footer } from '../components';
import '../style';

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
    <TranslateProvider>
      <Container>
        <Helmet
          title="ESC"
          meta={[
            { name: 'description', content: 'ESC' },
            { name: 'keywords', content: 'ESC' },
          ]}
        />
        <Header />
        <Content>
          <div className="container ph2">{children()}</div>
        </Content>
        <Footer />
      </Container>
    </TranslateProvider>
  );
}

Wrapper.propTypes = {
  children: PropTypes.func,
};

Wrapper.defaultProps = {
  children: undefined,
};

export default Wrapper;
