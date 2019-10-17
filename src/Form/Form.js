import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReservation(this.state);
  }

  render() {
    return (
      <form>
        <input type='text' placeholder='Name' name='name' onChange={event => this.handleChange(event)}></input>
        <input type='text' placeholder='Date (mm/dd)' name='date' onChange={event => this.handleChange(event)}></input>
        <input type='text' placeholder='Time' name='time' onChange={event => this.handleChange(event)}></input>
        <input type='number' placeholder='Number of guests' name='number' onChange={event => this.handleChange(event)}></input>
        <button className='button--make-resy' onClick={event => this.handleSubmit(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;