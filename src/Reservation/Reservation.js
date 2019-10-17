import React from 'react';
import './Reservation.css'



const Reservation = ({id, name, date, time, number, cxReservation}) => {
  return (
    <section data-id={id} className='section section--reservation'>
      <div>
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{time} pm</p>
        <p>Number of Guests: {number}</p>
      </div> 
      <button onClick={event => cxReservation(id, event)}>Cancel</button>
    </section>
  )
}



export default Reservation;