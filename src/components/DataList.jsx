import React from 'react'
import Data from './Data'

const DataList = ({ datas }) => {
  console.log(datas)

  return (
    <div>
      <ul>
        {datas.map((data) => (
          <Data 
            key={data.id}
            title={data.title} 
            deadline={data.deadline}
            status={data.status}/>
        ))}
      </ul>
    </div>
  )
}

export default DataList

// {datas.map((data) => (
//   <div key={data.id} className='flex flex-col lg:mx-80 lg:my-10 border border-zinc-800 rounded-xl lg:p-10'>
//       <p><span className='font-bold'>Title:</span> <span className='font-semibold'>{data.title}</span></p>
//       <p><span className='font-bold'>Deadline:</span> <span className='font-semibold'>{data.deadline}</span></p>
//       <p><span className='font-bold'>Status:</span> <span className='font-semibold'>{data.status}</span></p>
//   </div>
// ))}