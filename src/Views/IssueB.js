import React, { Component } from 'react';


export default class IssueB extends Component {
	render(){
		return(

			<div>
				<h1 className="title"><b>Issue #658687</b></h1>
				<h2 className="subtitle"><b>Assigned to Steckel, Irish</b></h2>
				<progress className="progress is-success is-large" value="30" max="100">30%</progress>
				<span style={{textAlign: 'center'}}><b>This issue is 30% complete.</b></span>

				<p style={{textAlign: 'left'}}>
				<b>Details About this Issue</b><br />
				This issue is overdue by <span style={{fontWeight: 'bold', color: '#FF0000'}}>10864 days.</span><br />
				This issue was created on <b>August 22, 1983</b> as a <b>complex</b> issue.<br />
				</p><br />
								<span style={{textAlign: 'right'}}><button className = "button is-warning">Notify Steckel, Irish</button></span>
				<br />

			<div className="columns">
				<div className="column is-half">
					<div className="tile is-ancestor">
						<div className="tile is-parent is-vertical">
							<div className="tile is-child">
										<table className = "table is-striped is-narrow">
										<tbody>
										 <tr>
											 <th>Customer</th>
											 <td>Microtech Distributor</td>
										 </tr>
										 <tr>
											 <th>Category</th>
											 <td>Service G6</td>
										 </tr>
										 <tr>
											 <th>Status</th>
											 <td>Pending</td>
										 </tr>
										 <tr>
											 <th>Routed To</th>
											 <td><span style={{color: '#CCCCCC'}}>Pending</span></td>
										 </tr>
										 <tr>
											 <th>Description</th>
											 <td>Request for 6588, system malfunctioning lag, user access list. Orbit and UIT database overload. Urgent. Please inform Help Desk ASAP.</td>
										 </tr>
										</tbody>
									</table>
							</div>
						</div>
					</div>
				</div>
				<div className="column">
						<b>Issue Timeline</b><br />

										<table className = "table is-striped is-narrow">
										<tbody>
										 <tr>
											 <th>4/2/2017:</th>
											 <td><code>Details may not be pulled from other sources, such as UIT.</code></td>
										 </tr>
										 <tr>
											 <th>2/27/2017:</th>
											 <td><code>Adding onshore users and restricting offshore users</code></td>
										 </tr>
										 <tr>
											 <th>2/21/2017:</th>
											 <td><code>Issue tickeet created and submited</code> </td>
										 </tr>
										 <tr>
											 <th>1/7/2017:</th>
											 <td><code>Ticket modified</code> </td>
										 </tr>
										 <tr>
											 <th>1/7/2017:</th>
											 <td><code>Issue created.</code></td>
										 </tr>
										</tbody>
									</table>
				</div>
			</div>
<br/>


										<table className = "table is-striped is-narrow">
										<tbody>
										 <tr>
											 <th>Comment</th>
											 <td><textarea className="textarea" placeholder="Comment on this issue. This will only be visible to the assigned Client Manager."></textarea></td>
										 </tr>
										</tbody>
									</table>







			</div>

			);
	}
}
