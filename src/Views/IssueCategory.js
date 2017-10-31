import React, { Component } from 'react';

export default class IssueCategory extends Component {
  render () {
    return (
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Category</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <div className="select is-fullwidth">
                <select>
                  <option> Appeals</option>
                  <option> Audit</option>
                  <option> Benefit Consultation</option>
                  <option> ... </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
