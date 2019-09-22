import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';

import LocaleContext from './LocaleContext';
import { DEFAULT_LOCALE, LOCALE_DATA } from '../constants';
import { getLocale, setLocale } from '../utils';
import messages from '../messages';

class TranslateProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locale: getLocale() };
    addLocaleData(LOCALE_DATA);
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ locale: getLocale() });
  }

  render() {
    const { children } = this.props;
    const { locale } = this.state;
    return (
      <LocaleContext.Provider
        value={{
          getLocale: () => locale,
          setLocale: newLocale => {
            this.setState({ locale: newLocale });
            setLocale(newLocale);
          },
        }}
      >
        <IntlProvider
          key={locale}
          locale={locale}
          messages={messages[locale]}
          defaultLocale={DEFAULT_LOCALE}
        >
          {children}
        </IntlProvider>
      </LocaleContext.Provider>
    );
  }
}

TranslateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TranslateProvider;
