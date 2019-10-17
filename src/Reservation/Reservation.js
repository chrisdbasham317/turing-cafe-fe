import React from 'react';
import './Reservation.css'



const Reservation = ({id, name, date, time, number}) => {
  return (
    <section data-id={id} className='section section--reservation'>
      <div>
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{time}</p>
        <p>Number of Guests: {number}</p>
      </div> 
    </section>
  )
}



export default Reservation;