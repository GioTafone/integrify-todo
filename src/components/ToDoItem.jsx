import React, {useState, useEffect} from 'react'

const ToDoItem = () => {
    const [formData, setFormData] = useState({
        title: '',
        deadline: '',
        status:'Done'
    })

    useEffect(() => {
            localStorage.setItem('formData', JSON.stringify(formData))
    })

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
            console.log(formData)
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <input 
                type='text'
                placeholder='Title'
                onChange={handleChange}
                name='title'
                value={formData.title}
                className='border'
            />
            <input 
                type='text'
                placeholder='Deadline'
                onChange={handleChange}
                name='deadline'
                value={formData.deadline}
                className='border'
            />
            <label htmlFor='status'>Please select Status</label>
            <br />
            <select
                id='status'
                value={formData.status}
                onChange={handleChange}
                name='status'
            >
                <option value='done'>Done</option>
                <option value='inProgress'>In Progress</option>
                <option value='notStarted'>Not Started</option>
            </select>
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ToDoItem