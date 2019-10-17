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
    const resData = !this.state.isLoading ? 
       console.log(this.state.reservations) : console.log('not yet')
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
