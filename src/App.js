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
          <h1><em>"Anong Network Nga Ulit Yun?"</em></h1>
          <p className="lead">
            Have you ever spoken those words in vain? Now you can search kung <em>anong network si crush</em>! <br/> No more accidental bawas sa load! &nbsp;
            <i className="fa fa-money" aria-hidden="true"></i> &nbsp;
            <i className="fa fa-money" aria-hidden="true"></i> &nbsp;
            <i className="fa fa-money" aria-hidden="true"></i>
          </p>
        </div>

        <FilterBar filterNumbers={this.filterNumbers} />

        <div className="row">
          {this.state.activeNetworks.map((network, index) => (<NetworkTable network={network} key={index}/>))}
        </div>
      </div>
    )
  }
}

export default App