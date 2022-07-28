import React, {useState, useEffect} from 'react'

const ToDoItem = ({ addTodos }) => {
    const [formData, setFormData] = useState({
            id: Math.floor(Math.random() * 25000),
            title: '',
            deadline: '',
            status:''
        }
    )

    const handleChange = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        addTodos(formData)
        setFormData({
                id: Math.floor(Math.random() * 25000),
                title:'',
                deadline: '',
                status: ''
            })
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Title'
                onChange={handleChange}
                name='title'
                value={formData.title}
                className='border lg:w-4/12 lg:mt-8'
            />
            <br />
            <input 
                type='text'
                placeholder='Deadline'
                onChange={handleChange}
                name='deadline'
                value={formData.deadline}
                className='border lg:w-4/12'
            />
            <br />
            <label htmlFor='status'>Please select Status</label>
            <select
                id='status'
                value={formData.status}
                onChange={handleChange}
                name='status'
                className='border lg:w-4/12'
            >
                <option value='Done'>Done</option>
                <option value='In Progress'>In Progress</option>
                <option value='Not Started'>Not Started</option>
            </select>
            <br />
            <button className='bg-indigo-500 rounded-xl px-4 py-3 mb-4 font-semibold transition duration-700 transform hover:-translate-y-1 text-white hover:bg-indigo-700'>Add</button>
        </form>
    </div>
  )
}

export default ToDoItem