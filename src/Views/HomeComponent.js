import React, { Component } from 'react';
import moment from 'moment';

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="tile is-ancestor is-vertical">
        <div className="tile">
          <div className="container has-text-centered">
            <h1 className="title">
              Hello <strong><font style={{color: '#C25608'}}>Emily,</font></strong> welcome back.
            </h1>
            <h2 className="subtitle">
              Today is <strong>{`${moment().format('MMMM Do YYYY')}`}</strong>, use the links in the navigation bar to get started!
            </h2>
          </div>
        </div>
      </div>
    );
  }
};
