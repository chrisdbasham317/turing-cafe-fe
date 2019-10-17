import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import Form from '../Form/Form';
import { resyFetch, postResy, deleteResy } from '../apiCalls.js';
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
    resyFetch()
      .then(data => {
        this.setState({
          isLoading: false,
          reservations: data
        })
      })
      .catch(err => console.error(err))
  }

  addReservation = (reservation) => {
    postResy(reservation)
      .then(data => this.setState({
        reservations: [...this.state.reservations, data]
      }))
      .catch(err => console.error(err))
  }

  cxReservation = (id, event) => {
    event.preventDefault();
    deleteResy(id)
      .then(data => this.setState({
        reservations: data
      }))   
      .catch(err => console.error(err))
  }   

  render() {
    const resData = !this.state.isLoading ? <Cards resData={this.state.reservations} cxReservation={this.cxReservation}/> : console.log('not yet')
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
