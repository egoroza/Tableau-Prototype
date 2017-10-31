import React, { Component } from 'react';


export default class OpenItemsA extends Component {
	render(){
		return(

			<div>
			<form action="/action_page.php" method="get">
			<h1 className="title"><b>Action To Be Taken</b></h1>
			<h2 className="subtitle"><b>Assigned by Goroza, Emily</b></h2>
			<input type="radio" name="action" value="Contact"/> Contact<br/>
			<input type="radio" name="action" value="Cancel"/> Cancel<br/>
			<input type="radio" name="action" value="Postpone"/> Postpone<br/>
			<input type="radio" name="action" value="Resolve"/> Resolve<br/>
			<br/>
			<input type="button" value="Submit" className="button is-primary"/>
			</form>
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
