// Imports
import React from 'react'
import DateHeader from './Components/DateHeader/DateHeader'
import TodoList from './Components/TodoList/TodoList'
import AddTodo from './Components/AddTodo/AddTodo'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [isclicked, setIsClicked] = useState(false);
  const [todoList, setTodoList] = useState([]);

  // Fetching data from local storage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('todoList'))
    if (!data)
      setTodoList([])
    else {
      setTodoList(data)
    }
  }, [])

  // button handler
  const buttonHandler = () => {
    setIsClicked(true)
  }

  // Input handler (Enter key to add task , esc key to toggle back to add button)
  const inputHandler = (e) => {
    if (e.key === 'Enter') {
      const content = e.target.value.trim();
      if (!content) {
        alert("please enter the task")
      }
      else {
        console.log(todoList);
        todoList.push({
          content: content,
          isChecked: false
        })
        setTodoList(todoList)
        e.target.value = ''
        localStorage.setItem('todoList', JSON.stringify(todoList))
      }
    }
    else if (e.key === 'Escape')
      setIsClicked(false)
  }

  return (
    <div className="app-body">
      <div className="container">
        {/* Components and passing props to them */}
        <DateHeader />
        <TodoList />
        <AddTodo isclicked={isclicked} onClick={buttonHandler} onKeyDown={inputHandler} />
      </div>
    </div>
  )
}

export default App;