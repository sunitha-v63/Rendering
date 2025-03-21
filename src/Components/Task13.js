import React from 'react'

const Task13 = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
  
    return (
      <div>
        <h2>Even Numbers</h2>
        <ul>
          {evenNumbers.map((num) => (
            <li key={num}>
              {num}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Task13