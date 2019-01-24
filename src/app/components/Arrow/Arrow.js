import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Arrow extends Component {
  render() {
    const { rotate } = this.props;
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="angle-down"
        className={`svg-inline--fa fa-angle-down fa-w-10 ${
          rotate ? 'rotate' : ''
        } `}
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
        />
      </svg>
    );
  }
}

Arrow.propTypes = {
  rotate: PropTypes.bool.isRequired,
};
Arrow.defaultProps = {
  rotate: false,
};

export default Arrow;
