// Imports
import React from 'react'
import uncheckedTask from '../../Assets/uncheckedTask.png'
import TaskStyle from './Task.module.css'

// Function Component stateless
const UncheckedTask = ({ content, onClick }) => {
    return (
        <div className={TaskStyle.taskcontainer} onClick={onClick}>
            <span title={content.length > 25 ? content : ''} className={TaskStyle.taskContent}>{content}</span>
            <img className={TaskStyle.image} src={uncheckedTask} alt="" width={25} />
        </div>
    )
}

export default UncheckedTask;
