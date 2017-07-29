import React from 'react'

class FilterBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    e.preventDefault()
    this.setState({value: e.target.value})
  }

  render() {
    return(
      <input type="text" value={this.state.value} onChange={this.onChange}/>
    )
  }
}

export default FilterBar