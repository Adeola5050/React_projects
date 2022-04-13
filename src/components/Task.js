import React from 'react'
import './Task.css'


const Task =()=>{
    return(
        <div className='container'>
            <div>Task</div>
            <div>Description</div>
            <div>Completed</div>
            <button className='task-btn'>Delete</button>
        </div>
    )
}

// Task.defaultProps= {
//    name:" Task",
//    desc:"Do Something",
//    call:"Learn React"
// }


export default Task