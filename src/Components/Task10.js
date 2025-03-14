import React from 'react'

function Task10({hours}) {
    if(hours < 12)
    if(hours < 18)
    hours=9
  return (
    <div>
        <h6>Task10</h6>
        <h3> Multiple Returns Based on Condition</h3>
        <h3>{hours?"Morning":"Afternoon"}</h3>
    </div>
  )
}

export default Task10