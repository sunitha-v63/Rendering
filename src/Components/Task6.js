import React from 'react'

function Task6({ isLoggedIn }) {
    isLoggedIn="true"
  return (
    <div>
        <h6>Task6</h6>
        <h2>Conditional Rendering with &&</h2>
        <div>
      {isLoggedIn && <h1>Hello, User!</h1>}
    </div>
    </div>
  )
}

export default Task6