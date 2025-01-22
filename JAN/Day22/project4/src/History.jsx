import React from 'react';
import icon from "./assets/delete.png"
const History = ({ history,clearHistory }) => {
  return (
    <div className="history-container mt-3 p-3 border rounded bg-light">
      <h5>Calculation History</h5>
      <img
        src={icon} 
        alt="Clear History"
        style={{ width: '24px', height: '24px', cursor: 'pointer', marginBottom: '10px' }}
        onClick={clearHistory}
      />
      <ul className="list-group">
        {history.map((entry, index) => (
          <li key={index} className="list-group-item">
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;

