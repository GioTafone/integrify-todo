import React from 'react'

const Button = ({ handleClick, text }) => {

  return (
    <div className='flex justify-center'>
        <button className='bg-indigo-500 rounded-xl p-4 font-semibold transition duration-700 transform hover:-translate-y-1 text-white hover:bg-indigo-700' 
          onClick={handleClick}>
            {text}
        </button>
    </div>
  )
}

export default Button