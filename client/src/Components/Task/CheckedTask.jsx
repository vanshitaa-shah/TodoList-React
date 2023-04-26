// Imports
import React from 'react'
import checkedTask from '../../Assets/checkedTask.png'
import TaskStyle from './Task.module.css'

// Function Component stateless
const CheckedTask = ({ content, onClick }) => {
    return (
        <div className={TaskStyle.taskcontainer}>
            <span title={content.length > 25 ? content : ''} className={TaskStyle.taskContent} id={TaskStyle.checkedTask}>{content}</span>

            <img className={TaskStyle.image} src={checkedTask} onClick={onClick} alt="" width={25} />
        </div>
    )
}

export default CheckedTask;