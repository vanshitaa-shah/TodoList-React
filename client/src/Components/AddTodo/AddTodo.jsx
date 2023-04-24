// Imports
import React from 'react'
import ButtonStyle from './AddTodo.module.css'
// Import of react icon 
import { GrAdd } from "react-icons/gr";

const AddTodo = () => {
    return (
        <>
            <div className={ButtonStyle.addTodo}>
                <GrAdd />
            </div>
        </>
    )
}

export default React.memo(AddTodo);
