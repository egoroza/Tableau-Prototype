import React, { Component } from 'react';

export default class formTest extends Component {
	render() {
		return (
<div className="field is-horizontal">
	<div className="field-label is-normal">
		<label className="label">From</label>
	</div>
	<div className="field-body">
		<div className="field">
			<p className="control is-expanded has-icons-left">
				<input className="input" type="text" placeholder="Name" />
				<span className="icon is-small is-left">
					<i className="fa fa-user"></i>
				</span>
			</p>
		</div>
		<div className="field">
			<p className="control is-expanded has-icons-left has-icons-right">
				<input className="input is-success" type="email" placeholder="Email" value="alex@smith.com" />
				<span className="icon is-small is-left">
					<i className="fa fa-envelope"></i>
				</span>
				<span className="icon is-small is-right">
					<i className="fa fa-check"></i>
				</span>
			</p>
		</div>
	</div>
</div>



		);
	}
};

