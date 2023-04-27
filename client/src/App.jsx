// Imports
import React from 'react'
import DateHeader from './Components/DateHeader/DateHeader'
import TodoList from './Components/TodoList/TodoList'
import AddTodo from './Components/AddTodo/AddTodo'
import './App.css'
import { v4 } from 'uuid'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [isclicked, setIsClicked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) || []);

  // Logic for Expiration of Tasks
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    const previousDate = localStorage.getItem('date');
    if (currentDate !== previousDate) {
      localStorage.clear();
      setTodoList([]);
      localStorage.setItem('date', currentDate);
    }
  }, [])

  // Fetching data from local storage
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  // button handler
  const buttonHandler = () => {
    setIsClicked(true)
  }

  // Input handler (Enter key to add task , esc key to toggle back to add button)
  const inputHandler = (e) => {
    if (e.key === 'Enter') {
      const content = e.target.value.trim();
      if (!content) {
        setShowError(true);
        setTimeout(() => {
          setShowError(false)
        }, 1000)
      }
      else {
        setTodoList([...todoList, {
          id: v4(),
          content: content,
          isChecked: false
        }])
        e.target.value = ''

      }
    }
    else if (e.key === 'Escape')
      setIsClicked(false)
  }

  // Checking and unchecking of tasks
  const taskHandler = (item) => {
    const index = todoList.findIndex(todo => todo.id === item.id)
    todoList[index].isChecked = todoList[index].isChecked ? false : true;
    setTodoList([...todoList])
  }

  return (
    <div className="app-body">
      <div className="container">
        {/* Components and passing props to them */}
        <DateHeader />
        <TodoList todoList={todoList} taskHandler={taskHandler} />
        <AddTodo isclicked={isclicked} onClick={buttonHandler} onKeyDown={inputHandler} showError={showError} />
      </div>
    </div>
  )
}

export default App;