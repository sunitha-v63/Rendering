import React from 'react'

function Task8() {
  const tasks=[{ id: 1, msg: "project1", completed: true },
    { id: 2, msg: "project2", completed: false }]
  return (
    <div>
        <h6>Task8</h6>
        <h3>List with Conditional Rendering</h3>
        <ol>
          {
            tasks.map((task)=>
            (
              <li key={task.id}>
                <h4>answer:{task.completed?"yes":"no"}</h4>
              </li>
            ))
          }
        </ol>
    </div>
  )
}

export default Task8