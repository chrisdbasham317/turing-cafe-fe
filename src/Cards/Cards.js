import React from 'react';
import Reservation from '../Reservation/Reservation';
import './Cards.css'



const Cards = (props) => {
  const reservation = props.resData.map(res => {
    return (
      <Reservation
        key={res.id}
        id={res.id}
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
        cxReservation={props.cxReservation}
      /> 
    )
  })
  return (
    <section className='section section--cards'>
      {reservation}
    </section>
  )
}



export default Cards;