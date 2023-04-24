// Imports
import React from 'react'
import checkedTask from '../../Assets/checkedTask.png'
// Import of style module
import TaskStyle from './Task.module.css'

// Function Component
const CheckedTask = () => {
    return (
        <div className={TaskStyle.taskcontainer}>
            <span className={TaskStyle.taskContent}>Complete Practical-2</span>
            <img className={TaskStyle.image} src={checkedTask} alt="" width={25} />
        </div>
    )
}

export default React.memo(CheckedTask);