import React from 'react'

function Task7({ isLoggedIn }) {
    isLoggedIn="true"
  return (
    <div>
        <h6>Task7</h6>
        <h2>Conditional Rendering with Ternary Operator</h2>
        <h2>{isLoggedIn ? "Welcome" : "Please Log In"}</h2>
    </div>
  )
}

export default Task7