import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class TitleComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    }
  }

  render() {
    return (
      <div className="container has-text-centered">
        <h1 className="title">Issue tracking for <font style={{color: '#C25608'}}>{`${moment().format('MMMM Do YYYY')}`}</font></h1>
        <h2 className="subtitle">You are viewing your dashboard</h2>
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button className="button">
              <span>Change view</span>
              <span className="icon is-small">
                <i className="fa fa-angle-down" />
              </span>
            </button>
          </div>

          <div className="dropdown-menu">
            <div className="dropdown-content">
              <Link className="dropdown-item" to="/">
                Client Director View
              </Link>
              <Link className="dropdown-item" to="/reporting">
                Client Manager View
              </Link>
              <hr className="dropdown-divider" />
              <Link className="dropdown-item" to="/customer">
                Customer View
              </Link>
            </div>
          </div>
        </div>

        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button className="button">
              <span>Change date</span>
              <span className="icon is-small">
                <i className="fa fa-angle-down" />
              </span>
            </button>
          </div>

          <div className="dropdown-menu">
            <div className="dropdown-content">
              <a className="dropdown-item">
                Last Week
              </a>
              <a className="dropdown-item">
                Last Month
              </a>
              <hr className="dropdown-divider" />
              <a className="dropdown-item">
                Year to Date
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
