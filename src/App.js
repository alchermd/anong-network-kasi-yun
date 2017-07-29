import React from 'react'
import FilterBar from './FilterBar'
import NetworkTable from './NetworkTable'
import networks from './networks.json' 

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {networks: networks.data, activeNetworks: networks.data}

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
              (number.includes(str) || network.networkName.toUpperCase().includes(str.toUpperCase()))
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
          <p className="lead">Have you ever spoken those words in vain? Now you can search kung <em>anong network si crush</em>! No more bawas piso sa load!</p>
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