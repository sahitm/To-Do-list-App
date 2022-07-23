import React from 'react'

function Task({id,item,removeTask}) {

    const [isCompleted,setIsCompleted] = React.useState(false)

    return ( 
        <div className='article'>
            <h1 className='Task'>{item}</h1>
            <div className='taskBtn'>
                <button onClick={() => removeTask(id)}>remove</button>
                <button onClick={() => setIsCompleted(!isCompleted)}>completed</button>
            </div>

            {isCompleted ? <h4>Task Completed</h4> : <h4>Task not Completed</h4> }
        </div>
     )
}

export default Task