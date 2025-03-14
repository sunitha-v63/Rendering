import React from 'react'

function Task2() {
    const number = [1,2,3,4,5,6];
  return (
    <div>
        <h6>Task2</h6>
        <h2>Basic List Rendering</h2>
        <ul>
                {number.map((numbers) => (
                    <li>{numbers}</li>
                ))}
            </ul>
    </div>
  )
}

export default Task2