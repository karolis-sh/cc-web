import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import { TranslateProvider } from '../i18n/components';
import { Header, Footer } from '../components';
import { theme } from '../style';
import data from '../data';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

class Wrapper extends React.Component {
  componentDidMount() {
    if (!document.getElementById('webfontloader')) {
      const wf = document.createElement('script');
      const s = document.scripts[0];
      wf.src =
        'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      wf.id = 'webfontloader';
      wf.onload = () => {
        global.WebFont.load({ google: { families: ['Asap'] } });
      };

      s.parentNode.insertBefore(wf, s);
    }
  }

  render() {
    const {
      children,
      location: { pathname },
    } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <TranslateProvider>
          <Container>
            <Helmet>
              <html lang="en" />
              <title>{data.metaTitle}</title>
              <meta name="description" content={data.metaDescription} />
              <meta httpEquiv="Cache-control" content="public" />
              <meta httpEquiv="x-ua-compatible" content="ie=edge" />
              <meta
                name="google-site-verification"
                content="NWrrGB31y_lYtD7snlWTGiULuYIey4CuzkTsBw-uwKw"
              />
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
              />
              {data.metaSocialElement}
            </Helmet>
            <Header pathname={pathname} />
            <Content>
              <div className="container ph2">{children()}</div>
            </Content>
            <Footer />
          </Container>
        </TranslateProvider>
      </ThemeProvider>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.func,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

Wrapper.defaultProps = {
  children: undefined,
};

export default Wrapper;
