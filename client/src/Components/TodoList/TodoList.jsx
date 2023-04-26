// Imports
import React from 'react'
import CheckedTask from '../Task/CheckedTask'
import UncheckedTask from '../Task/UncheckedTask'
import NoTodo from '../../Assets/No_Task.png'
import ListStyle from './TodoList.module.css'

const TodoList = ({ todoList, taskHandler }) => {
    return (
        <div className={ListStyle.listContainer}>
            {/* Filtering of tasks based on completion */}
            {todoList.length > 0 ? (
                todoList.map(item =>
                    item.isChecked ? (
                        <CheckedTask key={item.id} content={item.content} onClick={() => taskHandler(item)} />
                    ) : (
                        <UncheckedTask key={item.id} content={item.content} onClick={() => taskHandler(item)} />
                    )
                )
            ) : (
                <img src={NoTodo} className={ListStyle.noData} alt="a" width={250} />
            )
            }
        </div>
    )
}

export default TodoList;