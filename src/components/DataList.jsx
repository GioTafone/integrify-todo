import React from 'react'

const DataList = ({ datas }) => {
  return (
    <div>{datas.map((data) => (
        <div key={data.id} className='flex flex-col w-full items-center mt-10'>
            <p>{data.title}</p>
            <p>{data.deadline}</p>
            <p>{data.status}</p>
        </div>
    ))}</div>
  )
}

export default DataList