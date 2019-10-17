import React, { Component } from 'react';
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

  render() {
    const resData = !this.state.isLoading ? this.state.reservations.map( res => {
      return <div>
        <h2>{res.name}</h2>
        <p>{res.date}</p>
        <p>{res.time}</p>
        <p>Number of Guests: {res.number}</p>
      </div>  
    }) : console.log('not yet')
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          {resData}
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
