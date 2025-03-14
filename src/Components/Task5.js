import React from 'react'

function Task5() {
    const fruits = [
        { id: 1, name: "Apple", color: "red" },
        { id: 2, name: "Banana", color: "yellow" },
        { id: 3, name: "Grapes", color: "purple" },
        { id: 4, name: "Orange", color: "orange" },
      ];
  return (
    <div>
        <h6>Task5</h6>
        <h2>List with Inline Styling:</h2>
        <ul>
            {fruits.map((fruit)=>
            <li key={fruit.name} style={{ color: fruit.color }}>
                {fruit.name}
            </li>
            )}
        </ul>
    </div>
  )
}

export default Task5