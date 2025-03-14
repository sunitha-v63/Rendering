import React from 'react'

function Task3() {
    const names = ["viyona","yatvin","swetha","soniya"];

  return (
    <div>
        <h6>Task3</h6>
        <h2>List with Keys</h2>
        <ol>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ol>
    </div>
  )
}

export default Task3