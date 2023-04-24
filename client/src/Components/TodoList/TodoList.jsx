// Imports
import React from 'react'
import CheckedTask from '../Task/CheckedTask'
import UncheckedTask from '../Task/UncheckedTask'
//Imported style module 
import ListStyle from './TodoList.module.css'
const TodoList = () => {
    return (
        <div className={ListStyle.listContainer}>
            {/* Tasks */}
            <CheckedTask />
            <CheckedTask />
            <CheckedTask />
            <UncheckedTask />
            <UncheckedTask />
            <UncheckedTask />
            <UncheckedTask />
            <UncheckedTask />
            <UncheckedTask />
            <UncheckedTask />
            <UncheckedTask />
        </div>
    )
}

export default React.memo(TodoList);