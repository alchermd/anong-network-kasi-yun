import React from 'react'
import FilterBar from './FilterBar'
import NetworkTable from './NetworkTable'
import networks from './mockData'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {networks}
  }

  render() {
    return(
      <div className="container">
        <div className="page-header text-center">
          <h1>Anong Network Nga Ulit Yun?</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat neque ad at, velit optio nostrum.</p>
        </div>

        <FilterBar />
        <div>
        {this.state.networks.map(network => (<NetworkTable network={network}/>))}
        </div>
      </div>
    )
  }
}

export default App