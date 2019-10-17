import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      resName: '',
      resDate: '',
      resTime: '',
      numGuests: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <form>
        <input type='text' placeholder='Name' name='resName' onChange={event => this.handleChange(event)}></input>
        <input type='text' placeholder='Date (mm/dd)' name='resDate'></input>
        <input type='text' placeholder='Time' name='resTime'></input>
        <input type='text' placeholder='Number of guests' name='numGuests'></input>
        <button className='button--make-resy'>Make Reservation</button>
      </form>
    )
  }
}

export default Form;