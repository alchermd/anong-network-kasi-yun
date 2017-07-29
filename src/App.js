import React from 'react'
import FilterBar from './FilterBar'
import NetworkTable from './NetworkTable'
import networks from './mockData'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {networks, activeNetworks: networks}

    this.filterNumbers = this.filterNumbers.bind(this)
  }

  /**
   * 
   * @param {string} str -> The string that is used for filtering.
   *  The state is reset if the string is empty. 
   */
  filterNumbers(str) {
    if (str)
    this.setState( 
      {
        activeNetworks: this.state.networks.map(network => 
          ({
            ...network,
            numbers: network.numbers.filter(number => 
              number.includes(str)
          )})
        )
      } 
    )
    else
      this.setState({activeNetworks: this.state.networks})
  }

  render() {
    return(
      <div className="container">
        <div className="page-header text-center">
          <h1>Anong Network Nga Ulit Yun?</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat neque ad at, velit optio nostrum.</p>
        </div>

        <FilterBar filterNumbers={this.filterNumbers} />
        <div>
        {this.state.activeNetworks.map((network, index) => (<NetworkTable network={network} key={index}/>))}
        </div>
      </div>
    )
  }
}

export default App