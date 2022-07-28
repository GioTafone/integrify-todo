import React, {useState} from 'react'
import Button from './Button'
import DataList from './DataList'
import Form from './Form'

const FrontPage = () => {
    const [showTodos, setShowTodos] = useState(false)
    const [todos, setTodos] = useState([])

    const addTodos = (todoList) => {
        setTodos([...todos, todoList])
    }

    const handleClick = () => {
        setShowTodos(prevState => !prevState)
    }

  return (
    <div>
        <h1 className='lg:mb-5 w-full border'>Front Page</h1>
        <div className='w-full lg:my-5 border'>
            <Button handleClick={handleClick} text={showTodos ? 'Cancel' : 'Add new To Do'}/>
        </div>
        <div>
            {showTodos ? 
            <Form addTodos={addTodos}/>
            : null}
        </div>
        <div>
            <DataList datas={todos}/>
        </div>
    </div>
  )
}

export default FrontPage