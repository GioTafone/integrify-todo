import React, {useState} from 'react'
import Button from './Button'
import ToDoItem from './ToDoItem'

const FrontPage = () => {
    const [addTodo, setAddTodo] = useState(false)

    const handleClick = () => {
        setAddTodo(prevState => !prevState)
    }

    console.log(addTodo)

  return (
    <div>
        <h1 className='mb-5 text-center w-full border'>Front Page</h1>
        <div>
            <Button handleClick={handleClick}/>
        </div>
        <div>
            {addTodo ? 
            <ToDoItem />
            : null}
        </div>
    </div>
  )
}

export default FrontPage