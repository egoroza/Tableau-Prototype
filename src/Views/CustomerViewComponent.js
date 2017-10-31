import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TitleComponent from './TitleComponent';
import CustomerViewOpenItemsComponent from './CustomerViewOpenItemsComponent'
import CustomerViewOngoingUpdateComponent from './CustomerViewOngoingUpdateComponent';
import CustomerViewReportComponent from './CustomerViewReportComponent';

export default class CustomerViewComponent extends Component {
  renderOpenItems = () => {
    this.props.history.push(`${this.props.match.url}`);
  }

  renderOngoingUpdates = () => {
    this.props.history.push(`${this.props.match.url}/OngoingUpdates`);
  }

  renderReports = () => {
    this.props.history.push(`${this.props.match.url}/Reports`);
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
                <a className="menuLink" onClick={this.renderOpenItems}>
                  Open Items
                </a>
              </p>
              <p className="control">
                <a className="menuLink" onClick={this.renderOngoingUpdates}>
                  Ongoing Updates
                </a>
              </p>
              <p className="control">
                <a className="menuLink" onClick={this.renderReports}>
                  Reports
                </a>
              </p>
            </div>
          </div>


            <div className="box">
              <Route exact path={`${this.props.match.url}`} component={CustomerViewOpenItemsComponent} />
              <Route path={`${this.props.match.url}/OngoingUpdates`} component={CustomerViewOngoingUpdateComponent} />
              <Route path={`${this.props.match.url}/Reports`} component={CustomerViewReportComponent} />
            </div>
          </div>
        </div>


    );
  }
};
