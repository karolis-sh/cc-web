import PropTypes from 'prop-types';
import { useContext } from 'react';

import LocaleContext from './LocaleContext';

function CurrentLocale({ render }) {
  const { getLocale } = useContext(LocaleContext);
  return render({
    locale: getLocale(),
  });
}

CurrentLocale.propTypes = {
  render: PropTypes.func.isRequired,
};

export default CurrentLocale;
