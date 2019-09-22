import { useContext } from 'react';
import PropTypes from 'prop-types';

import LocaleContext from './LocaleContext';

function LocaleSwitcher({ render }) {
  const { getLocale, setLocale } = useContext(LocaleContext);
  return render({
    locale: getLocale(),
    setLocale,
  });
}

LocaleSwitcher.propTypes = {
  render: PropTypes.func.isRequired,
};

export default LocaleSwitcher;
