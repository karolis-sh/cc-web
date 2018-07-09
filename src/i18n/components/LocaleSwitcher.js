import React from 'react';
import PropTypes from 'prop-types';

class LocaleSwitcher extends React.Component {
  render() {
    const { render } = this.props;
    const { getLocale, setLocale } = this.context;
    return render({
      locale: getLocale(),
      setLocale,
    });
  }
}

LocaleSwitcher.contextTypes = {
  getLocale: PropTypes.func.isRequired,
  setLocale: PropTypes.func.isRequired,
};

LocaleSwitcher.propTypes = {
  render: PropTypes.func.isRequired,
};

export default LocaleSwitcher;
