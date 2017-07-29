import React from 'react'

const NetworkTable = ({networkName, numbers}) =>
  (<table className="table">
    <thead>
      <tr>
        <td>networkName</td>
      </tr>
    </thead>
    <tbody>
      {numbers.map(number => 
        (<tr>
          number
        </tr>)
      )}
    </tbody>
  </table>)

export default NetworkTable