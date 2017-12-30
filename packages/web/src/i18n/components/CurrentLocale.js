import React from 'react';
import PropTypes from 'prop-types';

class CurrentLocale extends React.Component {
  render() {
    return this.props.render({
      locale: this.context.getLocale(),
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
