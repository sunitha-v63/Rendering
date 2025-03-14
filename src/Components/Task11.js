import React from 'react'

function Task11() {
    const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
    const handleClick = (item) => {
        alert(`You clicked on ${item}`);
      };
    return (
        <div>
        <h2>Click an Item</h2>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Task11