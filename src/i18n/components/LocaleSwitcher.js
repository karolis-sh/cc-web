import React from 'react';
import PropTypes from 'prop-types';

class LocaleSwitcher extends React.Component {
  render() {
    return this.props.render({
      locale: this.context.getLocale(),
      setLocale: this.context.setLocale,
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
