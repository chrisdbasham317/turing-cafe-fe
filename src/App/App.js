import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      reservations: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          reservations: data
        })
      })
  }

  addReservation = (reservation) => {
    console.log(reservation)
    const options = {
      method: 'POST',
      body: JSON.stringify( reservation ),
      headers: { 'Content-Type': 'application/json'}
    }
    fetch('http://localhost:3001/api/v1/reservations', options)
      .then(res => res.json())
      .then(data => this.setState({
        reservations: [...this.state.reservations, data]
      }))
  }

  render() {
    const resData = !this.state.isLoading ? <Cards resData={this.state.reservations}/> : console.log('not yet')
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <div className='resy-form'>
        </div>
        <div className='resy-container'>
          {resData}
        </div>
      </div>
    )
  }
}

export default App;
