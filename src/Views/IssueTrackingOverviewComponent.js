import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SkyLight from 'react-skylight';

import IssueA from './IssueA';
import IssueB from './IssueB';
import NotifyAll from './NotifyAll';
import ViewAll from './ViewAll';
//import IssueC from './IssueC';
//import IssueD from './IssueD';
//import IssueE from './IssueE';
import Category from './Category';
import Subcategory from './Subcategory';
import YOY from './YOY'
// import ReactHover from '..'
// import HoverWeeklyBreakdown from './HoverWeeklyBreakdown';
// import HoverWeeklyClosed from './HoverWeeklyClosed'

// const optionsCursorTrueWithMargin = {
//   followCursor: true,
//   shiftX: 20,
//   shiftY: 0
// }


export default class IssueTrackingOverviewComponent extends Component {

  renderCategory = () => {
  	// TODO: Figure the routing
    this.props.history.push(`${this.props.match.url}`);
  }

  renderSubcategory = () => {
    this.props.history.push(`${this.props.match.url}/subcategory`);
  }

  renderYOY = () => {
    this.props.history.push(`${this.props.match.url}/yoy`);
  }

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
			<div className="columns" style={{backgroundColor: '#D3D3D3'}}>
				<div className="column is-5">
					<div className="tile is-ancestor">
						<div className="tile is-parent is-vertical">
							<div className="tile is-child">
							<h4 className="subtitle"><b>Client Manager Overview</b></h4>
								<table className = "table is-striped is-narrow">
									<thead>
									 <tr>
										<th>Client Manager</th>
										<th>Volume</th>
										<th><abbr title="Turnaround Time">Avg. TAT</abbr></th>
										<th><abbr title="Earliest Opened Issue Date">Date</abbr></th>
									 </tr>
									</thead>

									<tbody>
									 <tr>
										 <th>Kerstin, Gangi</th>
										 <td>8</td>
										 <td>5</td>
										 <td>Earliest Opened</td>
									 </tr>
									 <tr>
										 <th>Efrain, Yoho</th>
										 <td>1</td>
										 <td>16</td>
										 <td>Earliest Opened!!</td>
									 </tr>
									 <tr>
										 <th>Abel, Mizrahi  </th>
										 <td>20</td>
										 <td>103</td>
										 <td>Earliest Opened</td>
									 </tr>
									 <tr>
										 <th>Rolland, Due  </th>
										 <td>8</td>
										 <td>14</td>
										 <td>Earliest Opened</td>
									 </tr>
									 <tr>
										 <th>Maud, Graves  </th>
										 <td>1</td>
										 <td>2</td>
										 <td>Earliest Opened</td>
									 </tr>
									 <tr>
										 <th>Jarvis, Sampsel</th>
										 <td>83</td>
										 <td>56</td>
										 <td>Earliest Opened</td>
									 </tr>
									 <tr>
										 <th>Ola, Rosenburg</th>
										 <td>9</td>
										 <td>16</td>
										 <td>Earliest Opened</td>
									 </tr>
									 <tr>
										 <th>Mellisa, Remsen</th>
										 <td>4</td>
										 <td>4</td>
										 <td>Earliest Opened</td>
									 </tr>
									 <tr>
										 <th>Davida, Arata</th>
										 <td>2</td>
										 <td>29</td>
										 <td>Earliest Opened</td>
									 </tr>
									 <tr>
										 <th>Xiomara, Quesada</th>
										 <td>3</td>
										 <td>3</td>
										 <td>Earliest Opened</td>
									 </tr>
									</tbody>
								</table>
							</div>

							<div className="tile is-child">
									<h4 className="subtitle"><b>Top 5 Customers Received</b></h4>
									<table className = "table is-striped is-narrow">
										<thead>
										 <tr>
											<th>Customer</th>
											<th>Volume</th>
										 </tr>
										</thead>
										<tfoot>
											<tr>
												<th>Total</th>
												<th>149</th>
											</tr>
										</tfoot>
										<tbody>
										 <tr>
											 <th>Geneticaallsl (GEEE)</th>
											 <td>42</td>
										 </tr>
										 <tr>
											 <th>No Client</th>
											 <td>36</td>
										 </tr>
										 <tr>
											 <th>Employee Retirement</th>
											 <td>24</td>
										 </tr>
										 <tr>
											 <th>Mouseman Chase Co</th>
											 <td>17</td>
										 </tr>
										 <tr>
											 <th>Ramananan Company</th>
											 <td>15</td>
										 </tr>
										</tbody>
									</table>
							</div>
							<h4 className="subtitle"><b>Visual Trends</b></h4>
				                               <p className="control"><a className="menuLink" onClick={this.renderCategory}>Category Trends</a></p>
				                               <p className="control"><a className="menuLink" onClick={this.renderSubcategory}>Subcategory Trends</a></p>
				                               <p className="control"><a className="menuLink" onClick={this.renderYOY}>YOY Trends</a></p>

         <br />
				<Route exact path={`${this.props.match.url}`} component={Category} />
            	<Route exact path={`${this.props.match.url}/subcategory`} component={Subcategory} />
            	<Route exact path={`${this.props.match.url}/yoy`} component={YOY} />

						</div>
					</div>
				</div>

				<div className="column" style={{backgroundColor: '#FFFFFF', textAlign: 'center'}}>
				<h4 className="subtitle"><b>You are viewing <span style ={{color: '#FF0000', fontWeight: 'bold'}}>last week's</span> reports.</b></h4>
        <span className="icon is-large">
							<i className="fa fa-warning" />
						</span>
						<p><b>These Items Need Your Attention</b></p>
						<p>
						<span>
						Issue <b><a style={{color: '#A32A2E'}}>#1769402</a></b> assigned to <b><font style={{color: '#E87722'}}>Carrol, Sokolowski</font></b> is past due.             <span className="icon is-small">
							<i className="fa fa-chevron-right" onClick={() => this.refs.issueA.show()} style={{cursor: 'pointer'}}/>
						</span><br/>
							Issue <b><font style={{color: '#A32A2E'}}>#295029</font></b> assigned to <b><font style={{color: '#E87722'}}>Steckel, Irish</font></b> is past due.             <span className="icon is-small">
							<i className="fa fa-chevron-right" onClick={() => this.refs.issueB.show()} style={{cursor: 'pointer'}}/>
						</span><br />
            Issue <b><a style={{color: '#A32A2E'}}>#271000</a></b> assigned to <b><font style={{color: '#E87722'}}>Hinrichs, Shamika</font></b> is past due.             <span className="icon is-small">
            	<i className="fa fa-chevron-right" style={{cursor: 'pointer'}}/>
            </span><br/>
            Issue <b><a style={{color: '#A32A2E'}}>#271002</a></b> assigned to <b><font style={{color: '#E87722'}}>Hinrichs, Shamika</font></b> is past due.             <span className="icon is-small">
            	<i className="fa fa-chevron-right" style={{cursor: 'pointer'}}/>
            </span><br/>

						<button className="button" onClick={() => this.refs.NotifyAll.show()}>Notify All</button> <button className="button" onClick={() => this.refs.ViewAll.show()}>View All</button>

 </span>
 </p>


         <SkyLight dialogStyles={myDialog} hideOnOverlayClicked ref="issueA" title="">
          <IssueA />
        </SkyLight>

        <SkyLight dialogStyles={myDialog} hideOnOverlayClicked ref="issueB" title="">
         <IssueB />
       </SkyLight>

       <SkyLight dialogStyles={myDialogSmall} hideOnOverlayClicked ref="NotifyAll" title="">
        <NotifyAll />
      </SkyLight>
      <SkyLight dialogStyles={myDialogSmall} hideOnOverlayClicked ref="ViewAll" title="">
       <ViewAll />
     </SkyLight>
<br />
        <p><b>These Items Have Upcoming Due Dates</b><br />
        Issue <b><a style={{color: '#A32A2E'}}>#1769402</a></b> assigned to <b><font style={{color: '#E87722'}}>Carrol, Sokolowski</font></b> is due on <b>August 11, 2017.</b>           <span className="icon is-small">
          <i className="fa fa-chevron-right" onClick={() => this.refs.issueA.show()} style={{cursor: 'pointer'}}/>
        </span><br/>
          Issue <b><font style={{color: '#A32A2E'}}>#295029</font></b> assigned to <b><font style={{color: '#E87722'}}>Devakumar, Emily</font></b> is due on <b>August 12, 2017.</b>          <span className="icon is-small">
          <i className="fa fa-chevron-right" onClick={() => this.refs.issueB.show()} style={{cursor: 'pointer'}}/>
        </span><br/>





        </p>

 <br />
 							<div className="tile is-child" style={{backgroundColor: '#D3D3D3', padding: '5px'}}>

									<h4 className="subtitle"><b>Weekly Breakdown Received</b></h4>
									<table className = "table is-striped is-narrow">
										<thead>
										 <tr>
											<th>Day of the Week</th>
											<th># Activities</th>
											<th># Issues</th>
											<th>Totals</th>
										 </tr>
										</thead>
										<tfoot>
											<tr>
												<th>Total</th>
												<th>121</th>
												<th>33</th>
												<th>154</th>
											</tr>
										</tfoot>
										<tbody>
										 <tr>
											 <th>Monday</th>
											 <td>26</td>
											 <td>10</td>
											 <td>36</td>
										 </tr>
										 <tr>
											 <th>Tuesday</th>
											 <td>24</td>
											 <td>5</td>
											 <td>29</td>
										 </tr>
										 <tr>
											 <th>Wednesday</th>
											 <td>26</td>
											 <td>8</td>
											 <td>32</td>
										 </tr>
										 <tr>
											 <th>Thursday</th>
											 <td>24</td>
											 <td>8</td>
											 <td>32</td>
										 </tr>
										 <tr>
											 <th>Friday</th>
											 <td>21</td>
											 <td>2</td>
											 <td>23</td>
										 </tr>
										</tbody>
									</table>
							</div>

 							<div className="tile is-child" style={{backgroundColor: '#D3D3D3', padding: '5px'}}>
									<h4 className="subtitle"><b>Weekly Breakdown Closed</b></h4>
									<table className = "table is-striped is-narrow">
										<thead>
										 <tr>
											<th>Day of the Week</th>
											<th># Activities</th>
											<th># Issues</th>
											<th>Totals</th>
										 </tr>
										</thead>
										<tfoot>
											<tr>
												<th>Total</th>
												<th>121</th>
												<th>33</th>
												<th>154</th>
											</tr>
										</tfoot>
										<tbody>
										 <tr>
											 <th>Monday</th>
											 <td>26</td>
											 <td>10</td>
											 <td>36</td>
										 </tr>
										 <tr>
											 <th>Tuesday</th>
											 <td>24</td>
											 <td>5</td>
											 <td>29</td>
										 </tr>
										 <tr>
											 <th>Wednesday</th>
											 <td>26</td>
											 <td>8</td>
											 <td>32</td>
										 </tr>
										 <tr>
											 <th>Thursday</th>
											 <td>24</td>
											 <td>8</td>
											 <td>32</td>
										 </tr>
										 <tr>
											 <th>Friday</th>
											 <td>21</td>
											 <td>2</td>
											 <td>23</td>
										 </tr>
										</tbody>
									</table>
							</div>
 							<div className="tile is-child" style={{backgroundColor: '#D3D3D3', padding: '5px'}}>
									<h4 className="subtitle"><b>Items Over 4 Days</b></h4>
									<table className = "table is-striped is-narrow">
										<thead>
										 <tr>
											<th>Day of the Week</th>
											<th># Activities</th>
											<th># Issues</th>
											<th>Totals</th>
										 </tr>
										</thead>
										<tfoot>
											<tr>
												<th>Total</th>
												<th>121</th>
												<th>33</th>
												<th>154</th>
											</tr>
										</tfoot>
										<tbody>
										 <tr>
											 <th>Monday</th>
											 <td>26</td>
											 <td>10</td>
											 <td>36</td>
										 </tr>
										 <tr>
											 <th>Tuesday</th>
											 <td>24</td>
											 <td>5</td>
											 <td>29</td>
										 </tr>
										 <tr>
											 <th>Wednesday</th>
											 <td>26</td>
											 <td>8</td>
											 <td>32</td>
										 </tr>
										 <tr>
											 <th>Thursday</th>
											 <td>24</td>
											 <td>8</td>
											 <td>32</td>
										 </tr>
										 <tr>
											 <th>Friday</th>
											 <td>21</td>
											 <td>2</td>
											 <td>23</td>
										 </tr>
										</tbody>
									</table>
							</div>

					</div>
			</div>
		);
	}
};
