// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }
  

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state.name)
    this.setState({name: ''})
  }


  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Band Name</label>
          <br />
          <input
          type="text"
          name="bandName"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default BandInput
