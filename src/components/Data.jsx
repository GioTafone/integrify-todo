import React from 'react'


const Data = ({ title, deadline, status, id }) => {
    
  return (
    <div>
      <li>{title}</li>
      <li>{deadline}</li>
      <li>{status}</li>
      <li>{id}</li>
    </div>
  )
}

export default Data