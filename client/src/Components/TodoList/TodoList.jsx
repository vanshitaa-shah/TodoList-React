// Imports
import React from 'react'
import CheckedTask from '../Task/CheckedTask'
import UncheckedTask from '../Task/UncheckedTask'
import NoTodo from '../../Assets/No_Task.png'

{ console.log(NoTodo) }
//Imported style module 
import ListStyle from './TodoList.module.css'
const TodoList = () => {
    return (
        <div className={ListStyle.listContainer}>
            {/* Tasks */}
            <img src={NoTodo} alt="a" width={250} />
        </div>
    )
}

export default React.memo(TodoList);