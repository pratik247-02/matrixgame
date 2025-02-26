import React, { useState } from 'react';
import './App.css'; 
const App = () => {
  const [matrix, setMatrix] = useState(Array(9).fill(''));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (matrix[index] === '') {
      const newMatrix = [...matrix];
      newMatrix[index] = 'green';
      setMatrix(newMatrix);

      const newClickOrder = [...clickOrder, index];
      setClickOrder(newClickOrder);

      if (index === 8) {
        changeToOrange(newClickOrder, newMatrix);
      }
    }
  };

  const changeToOrange = (clickOrder, matrix) => {
    clickOrder.forEach((index, i) => {
      setTimeout(() => {
        const newMatrix = [...matrix];
        newMatrix[index] = 'orange';
        setMatrix(newMatrix);
      }, i * 500); // 500ms delay between each change
    });
  };

  return (
    <div className="grid">
      {matrix.map((color, index) => (     //mapping the matrix
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        >
          {index + 1}                   
        </div>
      ))}
    </div>
  );
};

export default App;
