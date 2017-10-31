import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import IssueA from './IssueA';
import IssueB from './IssueB';


export default class ReportingQueueComponent extends Component {
  render () {
    var myDialog = {
        width: '80%',
        height: '800px',
        overflow: 'auto',
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '-400px',
        marginLeft: '-40%',
        backgroundColor: '#fff',
        borderRadius: '2px',
        zIndex: '100',
        padding: '15px',
        boxShadow: '0px 0px 4px rgba(0,0,0,.14),0px 4px 8px rgba(0,0,0,.28)',
        transition: 'all 0.5s ease'
    }

    var myDialogSmall = {
        width: '40%',
        height: '400px',
        overflow: 'auto',
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '-200px',
        marginLeft: '-20%',
        backgroundColor: '#fff',
        borderRadius: '2px',
        zIndex: '100',
        padding: '15px',
        boxShadow: '0px 0px 4px rgba(0,0,0,.14),0px 4px 8px rgba(0,0,0,.28)',
        transition: 'all 0.5s ease'
    }

    return (
      <div>
      <div className="field is-grouped is-grouped-centered">
			  <p className="control">
			    <a className="button is-primary" onClick={() => this.refs.priorityModal.show()}>
			      View Priority
			    </a>
			  </p>
			  <p className="control">
        <a className="button is-info is-normal" onClick={() => this.refs.upcomingModal.show()}>
			      View Upcoming
			    </a>
			  </p>
			</div>

      <SkyLight hideOnOverlayClicked ref="upcomingModal">
      <div class="modal">
        <div class="modal-content">
        <p>
        <br/>
        <header class="modal-card-head">
      <p class="modal-card-title"><strong>Modal title</strong></p>
    </header>
        <br/>
          Issue <b><a style={{color: '#A32A2E'}}>#1769402</a></b> assigned to <b><font style={{color: '#E87722'}}>Carrol, Sokolowski</font></b> is due on <b>August 11, 2017.</b>
          <span className="icon is-small">
            <i className="fa fa-chevron-right" onClick={() => this.refs.issueA.show()} style={{cursor: 'pointer'}}/>
          </span>
          <br/>
          Issue <b><a style={{color: '#A32A2E'}}>#1769402</a></b> assigned to <b><font style={{color: '#E87722'}}>Carrol, Sokolowski</font></b> is due on <b>August 11, 2017.</b>
          <span className="icon is-small">
            <i className="fa fa-chevron-right" onClick={() => this.refs.issueA.show()} style={{cursor: 'pointer'}}/>
          </span>
          <br/>
          Issue <b><a style={{color: '#A32A2E'}}>#1769402</a></b> assigned to <b><font style={{color: '#E87722'}}>Carrol, Sokolowski</font></b> is due on <b>August 11, 2017.</b>
          <span className="icon is-small">
            <i className="fa fa-chevron-right" onClick={() => this.refs.issueA.show()} style={{cursor: 'pointer'}}/>
          </span>
      </p>
      </div>
      </div>
      </SkyLight>

      <SkyLight hideOnOverlayClicked ref="priorityModal">
      <p><b>These Items Need Your Attention</b></p>
      <p>
      <span>
      Issue <b><a style={{color: '#A32A2E'}}>#1769402</a></b> assigned to <b><font style={{color: '#E87722'}}>Carrol, Sokolowski</font></b> is past due.             <span className="icon is-small">
        <i className="fa fa-chevron-right" onClick={() => this.refs.issueA.show()} style={{cursor: 'pointer'}}/>
      </span><br/>
        Issue <b><font style={{color: '#A32A2E'}}>#295029</font></b> assigned to <b><font style={{color: '#E87722'}}>Steckel, Irish</font></b> is past due.             <span className="icon is-small">
        <i className="fa fa-chevron-right" onClick={() => this.refs.issueA.show()} style={{cursor: 'pointer'}}/>
      </span><br />
      Issue <b><a style={{color: '#A32A2E'}}>#271000</a></b> assigned to <b><font style={{color: '#E87722'}}>McCarthy, Kelli</font></b> is past due.             <span className="icon is-small">
        <i className="fa fa-chevron-right" style={{cursor: 'pointer'}}/>
      </span><br/>
      Issue <b><a style={{color: '#A32A2E'}}>#271002</a></b> assigned to <b><font style={{color: '#E87722'}}>McCarthy, Kelli</font></b> is past due.             <span className="icon is-small">
        <i className="fa fa-chevron-right" style={{cursor: 'pointer'}}/>
      </span><br/>

      <button className="button" onClick={() => this.refs.NotifyAll.show()}>Notify All</button> <button className="button" onClick={() => this.refs.ViewAll.show()}>View All</button>

</span>
</p>
      </SkyLight>

    <table className = "table is-fullwidth">

    <thead>
      <tr>
        <th>Issue</th>
        <th>Date Received</th>
        <th>Assigned To</th>
        <th>Customer</th>
        </tr>
      </thead>
      <tbody>
      <tr><td>Issue #1769402</td>
      <td>January 7, 2017</td>
      <td>Carrol, Sokolowski</td>
      <td>Broadway Tube</td>

      <td>
        <span className="icon is-small">
              <i className="fa fa-chevron-right" onClick={() => this.refs.issueA.show()} style={{cursor: 'pointer'}}/>
        </span>
      </td>
      </tr>

      <tr><td>Issue #1769402</td>
      <td>January 7, 2017</td>
      <td>Carrol, Sokolowski</td>
      <td>Broadway Tube</td>

      <td>
        <span className="icon is-small">
              <i className="fa fa-chevron-right" onClick={() => this.refs.issueA.show()} style={{cursor: 'pointer', color: 'primary'}}/>
        </span>
      </td>
      </tr>

      <tr><td>Issue #1769402</td>
      <td>January 7, 2017</td>
      <td>Carrol, Sokolowski</td>
      <td>Broadway Tube</td>

      <td>
        <span className="icon is-small">
              <i className="fa fa-chevron-right" onClick={() => this.refs.issueA.show()} style={{cursor: 'pointer'}}/>
        </span>
      </td>
      </tr>
      <tr><td>Issue #1769402</td>
      <td>January 7, 2017</td>
      <td>Carrol, Sokolowski</td>
      <td>Broadway Tube</td>

      <td>
        <span className="icon is-small">
              <i className="fa fa-chevron-right" onClick={() => this.refs.issueA.show()} style={{cursor: 'pointer'}}/>
        </span>
      </td>
      </tr>

      <tr><td>Issue #1769402</td>
      <td>January 7, 2017</td>
      <td>Carrol, Sokolowski</td>
      <td>Broadway Tube</td>

      <td>
        <span className="icon is-small">
              <i className="fa fa-chevron-right" onClick={() => this.refs.issueA.show()} style={{cursor: 'pointer'}}/>
        </span>
      </td>
      </tr>

      <tr><td>Issue #1769402</td>
      <td>January 7, 2017</td>
      <td>Carrol, Sokolowski</td>
      <td>Broadway Tube</td>

      <td>
        <span className="icon is-small">
              <i className="fa fa-chevron-right" onClick={() => this.refs.issueA.show()} style={{cursor: 'pointer'}}/>
        </span>
      </td>
      </tr>

      <tr><td>Issue #1769402</td>
      <td>January 7, 2017</td>
      <td>Carrol, Sokolowski</td>
      <td>Broadway Tube</td>

      <td>
        <span className="icon is-small">
              <i className="fa fa-chevron-right" onClick={() => this.refs.issueA.show()} style={{cursor: 'pointer'}}/>
        </span>
      </td>
      </tr>

        <SkyLight dialogStyles={myDialog} hideOnOverlayClicked ref="issueA" title="">
          <IssueA/>
        </SkyLight>

      </tbody>
      </table>
      </div>
    );
  }
};
