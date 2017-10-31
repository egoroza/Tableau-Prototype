import React, { Component } from 'react';
import Logo from '../Logo.png';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    }
  }

  render () {
    return (
      <div className="hero-head">
        <header className="nav">
          <div className="container">
            <div className="nav-left">
              <Link className="nav-item" to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>

            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>

            <div className="nav-right nav-menu">
              <Link className="nav-item" to="/">
                Home
              </Link>
              <Link className="nav-item" to="/reporting">
                Issue Reporting
              </Link>
              <Link className="nav-item" to="/tracking">
                Issue Tracking
              </Link>

            </div>

          </div>
        </header>
      </div>
    );
  }
};
