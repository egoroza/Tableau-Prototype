import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TitleComponent from './TitleComponent';
import IssueTrackingOverviewComponent from './IssueTrackingOverviewComponent';
import IssueTrackingReceivedComponent from './IssueTrackingReceivedComponent';
import IssueTrackingOpenComponent from './IssueTrackingOpenComponent';
import IssueTrackingClosedComponent from './IssueTrackingClosedComponent';

export default class TrackingBaseComponent extends Component {

  renderOverview = () => {
    this.props.history.push(`${this.props.match.url}`);
  }

  renderReceived = () => {
    this.props.history.push(`${this.props.match.url}/received`);
  }

  renderOpen = () => {
    this.props.history.push(`${this.props.match.url}/open`);
  }

  renderClose = () => {
    this.props.history.push(`${this.props.match.url}/closed`);
  }

  render() {
    return (
      <div>
        <TitleComponent />

        <br /><br />
        <div className="menu">
          <div className="column">
            <div className="field has-addons has-addons-centered">
              <p className="control">
                <a className="menuLink" onClick={this.renderOverview}>
                  Overview
                </a>
              </p>
              <p className="control">
                <a className="menuLink" onClick={this.renderReceived}>
                  Received
                </a>
              </p>
              <p className="control">
                <a className="menuLink" onClick={this.renderOpen}>
                  Open
                </a>
              </p>
              <p className="control">
                <a className="menuLink" onClick={this.renderClose}>
                  Closed
                </a>
              </p>
            </div>
          </div>


            <div className="box">
              <Route exact path={`${this.props.match.url}`} component={IssueTrackingOverviewComponent} />
              <Route exact path={`${this.props.match.url}/received`} component={IssueTrackingReceivedComponent} />
              <Route exact path={`${this.props.match.url}/open`} component={IssueTrackingOpenComponent} />
              <Route exact path={`${this.props.match.url}/closed`} component={IssueTrackingClosedComponent} />
            </div>
          </div>
        </div>
    );
  }
};
