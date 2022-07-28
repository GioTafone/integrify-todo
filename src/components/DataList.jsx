import React from 'react'

const DataList = ({ datas }) => {
  return (
    <div>
      {datas.map((data) => (
        <div key={data.id} className='flex flex-col lg:mx-80 lg:my-10 border border-zinc-800 rounded-xl lg:p-10'>
            <p><span className='font-bold'>Title:</span> <span className='font-semibold'>{data.title}</span></p>
            <p><span className='font-bold'>Deadline:</span> <span className='font-semibold'>{data.deadline}</span></p>
            <p><span className='font-bold'>Status:</span> <span className='font-semibold'>{data.status}</span></p>
        </div>
      ))}
    </div>
  )
}

export default DataList