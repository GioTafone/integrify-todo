import React from 'react'

const Button = ({ handleClick }) => {

  return (
    <div >
        <button className='bg-zinc-200 hover:bg-slate-500' onClick={handleClick}>Add a new todo</button>
    </div>
  )
}

export default Button