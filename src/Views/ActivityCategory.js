import React, { Component } from 'react';

export default class ActivityCategory extends Component {
  render() {
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
                  <option>CDX</option>
                  <option>Claims</option>
                  <option>eServices</option>
                  <option>Created In Error</option>
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
