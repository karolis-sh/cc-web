import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const FAIcon = ({ type, className, ...props }) => (
  <i
    className={cx('fa', `fa-${type}`, className)}
    aria-hidden="true"
    {...props}
  />
);

FAIcon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

FAIcon.defaultProps = {
  className: null,
};

export default FAIcon;
