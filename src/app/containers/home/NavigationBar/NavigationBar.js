import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItemIndex: 0,
      isVisible: false,
    };
  }

  mouseEnter() {
    this.setState({ isVisible: true });
  }

  mouseLeave() {
    this.setState({ isVisible: false });
  }

  render() {
    const { items, isViewable } = this.props;
    const { isVisible } = this.state;

    if (items.length > 0) {
      return (
        <div
          className="navbar"
          onMouseEnter={() => this.mouseEnter()}
          onMouseLeave={() => this.mouseLeave()}
        >
          <ul id="links">
            {items.map((item, index) => (
              <li key={index} className="navbar_item">
                <div className="navbar__item__link">
                  <Link to={item.to}>{item.text}</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

NavigationBar.propTypes = {
  isViewable: PropTypes.bool,
  items: PropTypes.array,
};

NavigationBar.defaultProps = {
  isViewable: false,
  items: [],
};

export default NavigationBar;
