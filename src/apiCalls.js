export const resyFetch = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
}

export const postResy = (reservation) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(reservation),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch('http://localhost:3001/api/v1/reservations', options)
    .then(res => res.json())  
}

export const deleteResy = (id) => {
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
}