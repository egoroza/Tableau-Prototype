import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TitleComponent from './TitleComponent';
import ReportingSubmitComponent from './ReportingSubmitComponent';
import ReportingQueueComponent from './ReportingQueueComponent';


export default class ReportingBaseComponent extends Component {
  renderSubmit = () => {
    this.props.history.push(`${this.props.match.url}`);
  }

  renderQueue = () => {
    this.props.history.push(`${this.props.match.url}/queue`);
  }



  render() {
    return (
      <div>


              <TitleComponent />

        <br /><br />

          <div className="column">
            <div className="field has-addons has-addons-centered">
              <p className="control">
                <a className="menuLink" onClick={this.renderSubmit}>
                  Submit Issue
                </a>
              </p>
              <p className="control">
                <a className="menuLink" onClick={this.renderQueue}>
                  Work Queue
                </a>
              </p>
            </div>


            <div className="box">
              <Route exact path={`${this.props.match.url}`} component={ReportingSubmitComponent} />
              <Route exact path={`${this.props.match.url}/queue`} component={ReportingQueueComponent} />
            </div>
          </div>
        </div>
    );
  }
};
