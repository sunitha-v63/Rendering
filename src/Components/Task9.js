import React from 'react'

function Task9() {
    const tasks = [];
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
            >
              {task.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Task9