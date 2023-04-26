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
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) || []);

  // Fetching data from local storage
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    const previousDate = localStorage.getItem('date');
    if (currentDate !== previousDate) {
      localStorage.clear();
      localStorage.setItem('date', currentDate);
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
        <AddTodo isclicked={isclicked} onClick={buttonHandler} onKeyDown={inputHandler} />
      </div>
    </div>
  )
}

export default App;