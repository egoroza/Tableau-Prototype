import React, { Component } from 'react';


export default class NotifyAll extends Component {
	render(){
		return(

			<div>

				Are you sure you want to notify all Client Directors of their overdue items?

<br /><br />
<div className="control is-centered">
	<label className="checkbox">
		<input type="checkbox" checked />
		Sokolowski, Erin
	</label>
</div>
<div className="control">
	<label className="checkbox">
		<input type="checkbox" checked />
		Steckel, Irish
	</label>
</div>
<div className="control">
	<label className="checkbox">
		<input type="checkbox" checked />
		Hinrichs, Shamika
	</label>
</div>
<div className="control">
	<label className="checkbox">
		<input type="checkbox" checked />
		Ramos, Candice
	</label>
</div>
<div className="control">
	<label className="checkbox">
		<input type="checkbox" checked/>
		Watts, Barbara
	</label>
</div>
<div className="control">
	<label className="checkbox">
		<input type="checkbox" checked/>
		Woofman, Ben
	</label>
</div>

			<div className="field is-grouped is-grouped-centered">

			  <p className="control">
			    <a className="button is-primary">
			      Yes
			    </a>
			  </p>
			  <p className="control">
			    <a className="button is-light">
			      Cancel
			    </a>
			  </p>
			</div>
			</div>

			);
	}
}
