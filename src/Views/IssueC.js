import React, { Component } from 'react';


export default class IssueC extends Component {
	render(){
		return(

			<div>
				<h1 className="title"><b>Issue #1769402</b></h1>
				<h2 className="subtitle"><b>Assigned to Carrol, Sokolowski</b></h2>
				<progress className="progress is-success is-large" value="60" max="100">60%</progress>
				<span style={{textAlign: 'center'}}><b>This issue is 60% complete.</b></span>

				<p style={{textAlign: 'left'}}>
				<b>Details About this Issue</b><br />
				This issue is overdue by <span style={{fontWeight: 'bold', color: '#FF0000'}}>124 days.</span><br />
				This issue was created on <b>January 7, 2017</b> as a <b>complex, external</b> issue.<br />
				</p><br />
								<span style={{textAlign: 'right'}}><button className = "button is-warning">Notify Carrol, Sokolowski</button></span>
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
											 <td>Boardwalk Pipeline</td>
										 </tr>
										 <tr>
											 <th>Category</th>
											 <td>Reporting, Request SAS 70</td>
										 </tr>
										 <tr>
											 <th>Status</th>
											 <td>Action Required by Client Manager</td>
										 </tr>
										 <tr>
											 <th>Routed To</th>
											 <td><span style={{color: '#CCCCCC'}}><i>(not applicable)</i></span></td>
										 </tr>
										 <tr>
											 <th>Description</th>
											 <td>Request for 5500, claim lag, ssae16 and eServices user access list. UHC/ORx SSAE16 sent to client. eServices list rec'd. EAP/UBH in process and claim lag will be ready at the end of May. 2/21: Sent Optum reports to Christie.</td>
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
											 <td><code>Information for timelines may also be pulled from other sources, such as ORBIT.</code></td>
										 </tr>
										 <tr>
											 <th>2/27/2017:</th>
											 <td><code>Client managers will continue to have the option to add more information to the timeline.</code></td>
										 </tr>
										 <tr>
											 <th>2/21/2017:</th>
											 <td><code>Sent Optum reports to Christie.</code> </td>
										 </tr>
										 <tr>
											 <th>1/7/2017:</th>
											 <td><code>UHC/ORx SSAE16 sent to client</code> </td>
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
