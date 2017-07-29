import React from 'react'

const NetworkTable = ({network}) =>
  (<table className="table table-striped table-bordered table-hover">
    <thead>
      <tr>
        <th>{network.networkName}</th>
      </tr>
    </thead>
    <tbody>
      {network.numbers.map((number, index) => 
        (<tr key={index}>
          <td>{number}</td>
        </tr>)
      )}
    </tbody>
  </table>)

export default NetworkTable