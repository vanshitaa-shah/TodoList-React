// Import of style module
import React from 'react'
import checkedTask from '../../Assets/uncheckedTask.png'
// Import of style module
import TaskStyle from './Task.module.css'

// Function Component
const UncheckedTask = () => {
    return (
        <div className={TaskStyle.taskcontainer}>
            <span>Complete Practical-2</span>
            <img className={TaskStyle.image} src={checkedTask} alt="" width={25} />
        </div>
    )
}

export default React.memo(UncheckedTask);
