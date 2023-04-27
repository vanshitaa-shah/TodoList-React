// Imports
import React from 'react'
import Style from './AddTodo.module.css'
import { GrAdd } from "react-icons/gr";

const AddTodo = (props) => {
    return (
        <>
            {props.showError && <div className={Style.error}>! Please enter task</div>}
            {/* Logic for toggling bewteen input and add button */}
            {props.isclicked ? (
                <input
                    className={Style.input}
                    onKeyDown={props.onKeyDown}
                    type="text"
                    placeholder='Enter task here'
                    autoFocus />
            ) : (
                <button className={Style.addTodo} onClick={props.onClick}>
                    <GrAdd />
                </button>
            )
            }
        </>
    )
}

export default React.memo(AddTodo);
