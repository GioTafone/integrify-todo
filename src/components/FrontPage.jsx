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
    console.log(todos)

    const handleClick = () => {
        setShowTodos(prevState => !prevState)
    }


  return (
    <div>
        <h1 className='mb-5 text-center w-full border'>Front Page</h1>
        <div>
            <Button handleClick={handleClick}/>
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