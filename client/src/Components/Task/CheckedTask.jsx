// Imports
import React from 'react'
import checkedTask from '../../Assets/checkedTask.png'
import TaskStyle from './Task.module.css'


// Function Component stateless
const CheckedTask = ({ content, onClick, onDelete }) => {
    return (
        <div className={TaskStyle.taskcontainer} onClick={onClick}>
            <span title={content.length > 25 ? content : ''}
                className={TaskStyle.taskContent}
                id={TaskStyle.checkedTask}>{content}
            </span>
            <img className={TaskStyle.image} src={checkedTask} alt="" width={25} />
            <span className="material-symbols-outlined"
                id={TaskStyle.closeBtn} onClick={onDelete}>
                close
            </span>
        </div>
    )
}

export default CheckedTask;