// Imports
import React from 'react'
import DateHeader from './Components/DateHeader/DateHeader'
import TodoList from './Components/TodoList/TodoList'
import AddTodo from './Components/AddTodo/AddTodo'
import './App.css'

const App = () => {
  return (
    <div className="app-body">
      <div className="container">
        {/* Components */}
        <DateHeader />
        <TodoList />
        <AddTodo />
      </div>
    </div>
  )
}

export default App;