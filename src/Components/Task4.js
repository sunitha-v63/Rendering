import React from 'react'

function Task4() {
    const users = [
        { id: 1, name: "Swetha", age: 25 },
        { id: 2, name: "Soniya", age: 26 },
        { id: 3, name: "Nandhini", age: 22 },
      ];
  return (
    <div>
        <h6>Task4</h6>
        <h2>List of Objects</h2>
        <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - Age: {user.age}
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Task4