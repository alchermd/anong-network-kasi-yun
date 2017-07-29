import React from 'react'

const NetworkTable = ({network}) =>
  (<table className="table table-striped">
    <thead>
      <tr>
        <th>{network.name}</th>
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