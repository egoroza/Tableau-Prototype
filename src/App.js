import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './Views/NavBar';
import HomeComponent from './Views/HomeComponent';
import TrackingBaseComponent from './Views/TrackingBaseComponent';
import ReportingBaseComponent from './Views/ReportingBaseComponent';
import CustomerViewComponent from './Views/CustomerViewComponent';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero is-fullheight"  style={{backgroundColor: '#F2B411'}}>
          <NavBar active="home"/>

          <div className="hero-body">
            <div className="container">
              <Route exact path={`${this.props.match.url}`} component={HomeComponent} />
              <Route path={`${this.props.match.url}tracking`} component={TrackingBaseComponent} />
              <Route path={`${this.props.match.url}reporting`} component={ReportingBaseComponent} />
              <Route path={`${this.props.match.url}customer`} component={CustomerViewComponent} />
            </div>
          </div>

          <div className="hero-foot">
            <div className="container">
              <div className="content has-text-centered">
                <h3 className="subtitle">Prototype created by <strong>Team Doge</strong> for <strong>Client Directors and Client Managers</strong></h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};
