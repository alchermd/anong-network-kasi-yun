import React from 'react'
import './FilterBar.css'

class FilterBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    e.preventDefault()
    this.setState({value: e.target.value})
    this.props.filterNumbers(e.target.value)
  }

  render() {
    return(
      <input type="text" 
        value={this.state.value} 
        onChange={this.onChange}
        className="form-control FilterBar"
        placeholder="Enter number or network here. Ex. 0923 or 'Smart'"
        autoFocus={true}/>
    )
  }
}

export default FilterBar