// Imports
import React from 'react'
import Style from './AddTodo.module.css'
import { GrAdd } from "react-icons/gr";
import { useState } from 'react';

const AddTodo = (props) => {
    return (
        <>
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
