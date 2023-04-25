// Imports
import React from 'react'
import CheckedTask from '../Task/CheckedTask'
import UncheckedTask from '../Task/UncheckedTask'
import NoTodo from '../../Assets/No_Task.png'
import ListStyle from './TodoList.module.css'
import { useEffect } from 'react'

const TodoList = () => {
    const todoList = [
        {
            id: "123",
            content: "this is checked",
            ischecked: true
        },
    ]
    return (
        <div className={ListStyle.listContainer}>
            {todoList.length > 0 ? (
                todoList.map(item =>
                    item.ischecked ? (
                        <CheckedTask content={item.content} />
                    ) : (

                        <UncheckedTask content={item.content} />
                    )

                )
            )
                : (
                    <img src={NoTodo} className={ListStyle.noData} alt="a" width={250} />
                )
            }
        </div>
    )
}

export default TodoList;