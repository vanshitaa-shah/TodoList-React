// imports
import React from 'react'
import DateStyle from './DateHeader.module.css'

// Class component
class DateHeader extends React.Component {
    // constructor method
    constructor(props) {
        super(props);
        this.date = new Date();
    }

    // render method
    render() {
        return (
            <div className={DateStyle.container}>
                <div className={DateStyle.date}>
                    <span id={DateStyle.date}>{this.date.getDate()}</span>
                    <span id={DateStyle.monthAndYear}>
                        <span>{this.date.toLocaleString('en-US', { month: 'short' }).toLocaleUpperCase()}</span>
                        <span>{this.date.getFullYear()}</span>
                    </span>
                </div>
                <div id={DateStyle.day}>
                    {this.date.toLocaleString('en-US', { weekday: 'long' })}
                </div>
            </div>
        )
    }
}

export default React.memo(DateHeader);