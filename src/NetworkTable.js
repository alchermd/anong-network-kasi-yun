import React from 'react'

const NetworkTable = ({network}) =>
  (<div className="col-sm-3">   
    <table className="table table-hover">
      <thead>
        <tr>
          <th><i className="fa fa-server" aria-hidden="true"></i> {network.networkName}</th>
        </tr>
      </thead>
      <tbody>
        {network.numbers.map((number, index) => 
          (<tr key={index}>
            <td><i className="fa fa-mobile" aria-hidden="true"></i> {number}</td>
          </tr>)
        )}
      </tbody>
    </table>
  </div>)

export default NetworkTable