import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import OpenItemsA from './OpenItemsA';


export default class CustomerViewOpenItemsComponent extends Component {
  render () {
    var myDialog = {
        width: '60%',
        height: '420px',
        overflow: 'auto',
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '-210px',
        marginLeft: '-30%',
        backgroundColor: '#fff',
        borderRadius: '2px',
        zIndex: '100',
        padding: '15px',
        boxShadow: '0px 0px 4px rgba(0,0,0,.14),0px 4px 8px rgba(0,0,0,.28)',
        transition: 'all 0.5s ease'
    }

    return(
    <div>
      <div className="box" style={{textAlign: 'center'}}>
        <h2 className="subtitle"><b>Open Items</b></h2>
        <table className="table is-narrow is-striped">
        <thead>
          <tr>
            <th>UnitedHealthcare Owner</th>
            <th>GS Owner</th>
            <th>Category</th>
            <th>Notes</th>
            <th>Comments</th>
            <th>Date Opened</th>
            <th>Target Date</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>



          <tr>
            <td>Phyllis Gauthier</td>
            <td>AARP</td>
            <td>Case Implementation</td>
            <td>We’ve received many accolades, but this issue posits a problem.</td>
            <td>The importance of Conflict Resolution</td>
            <td>2/11/2002</td>
            <td>2/19/2010</td>
            <td><i className="fa fa-chevron-right" onClick={() => this.refs.OpenItemsA.show()} style={{cursor: 'pointer'}}/></td>
          </tr>
          <tr>
            <td>Patricia Fay</td>
            <td>Accenture</td>
            <td>Adjudication</td>
            <td>It was more of a blunder than a failure.</td>
            <td>Boston Site MA008</td>
            <td>9/11/2022</td>
            <td>8/22/2017</td>
            <td><i className="fa fa-chevron-right" onClick={() => this.refs.OpenItemsA.show()} style={{cursor: 'pointer'}}/></td>
          </tr>

          <tr>
            <td>Dana Fisher</td>
            <td>ArcelorMittal</td>
            <td>Billing</td>
            <td>This problem is baffling</td>
            <td> Site MA008</td>
            <td>1/13/2000</td>
            <td>4/2/2337</td>
            <td><i className="fa fa-chevron-right" onClick={() => this.refs.OpenItemsA.show()} style={{cursor: 'pointer'}}/></td>
          </tr>

          <tr>
            <td>Cindy Gonzalez</td>
            <td>Ford Health Insurance Corp.</td>
            <td>Benefit Consultation</td>
            <td>No comments.</td>
            <td>Issue not of utmost priority</td>
            <td>5/11/1999</td>
            <td>2/19/2019</td>
            <td><i className="fa fa-chevron-right" onClick={() => this.refs.OpenItemsA.show()} style={{cursor: 'pointer'}}/></td>
          </tr>

          <tr>
            <td>Ann Halas</td>
            <td>A O Smith Corporation</td>
            <td>COBRA</td>
            <td>Awaiting Response</td>
            <td>Listed in UIT</td>
            <td>9/11/2010</td>
            <td>7/12/2012</td>
            <td><i className="fa fa-chevron-right" onClick={() => this.refs.OpenItemsA.show()} style={{cursor: 'pointer'}}/></td>
          </tr>

          <tr>
            <td>Justin Hancock</td>
            <td>Williams</td>
            <td>EServices</td>
            <td>We are becoming demiurgic in our product development.</td>
            <td>Site 003</td>
            <td>2/2/2026</td>
            <td>5/52/2222</td>
            <td><i className="fa fa-chevron-right" onClick={() => this.refs.OpenItemsA.show()} style={{cursor: 'pointer'}}/></td>
          </tr>

          <tr>
            <td>Sarah Harris</td>
            <td>Whole Foods Market</td>
            <td>Dental</td>
            <td>Need this issue to be looked into ASAP</td>
            <td>No Notes</td>
            <td>2/12/2022</td>
            <td>3/30/2055</td>
            <td><i className="fa fa-chevron-right" onClick={() => this.refs.OpenItemsA.show()} style={{cursor: 'pointer'}}/></td>
          </tr>

          <tr>
            <td>John Harris</td>
            <td>Bausch&Lomb</td>
            <td>ORBIT</td>
            <td>Needs to be taken look at. Dashboard not displaying properly.</td>
            <td>Issue undergoing resolution</td>
            <td>4/19/2013</td>
            <td>5/10/2012</td>
            <td><i className="fa fa-chevron-right" onClick={() => this.refs.OpenItemsA.show()} style={{cursor: 'pointer'}}/></td>
          </tr>



        </tbody>
        </table>

        <SkyLight dialogStyles={myDialog} hideOnOverlayClicked ref="OpenItemsA" title="">
         <OpenItemsA />
       </SkyLight>

      </div>
    </div>
  )
}
}
