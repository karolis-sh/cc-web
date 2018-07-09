import React from 'react';
import PropTypes from 'prop-types';

class CurrentLocale extends React.Component {
  render() {
    const { render } = this.props;
    const { getLocale } = this.context;
    return render({
      locale: getLocale(),
    });
  }
}

CurrentLocale.contextTypes = {
  getLocale: PropTypes.func.isRequired,
};

CurrentLocale.propTypes = {
  render: PropTypes.func.isRequired,
};

export default CurrentLocale;
