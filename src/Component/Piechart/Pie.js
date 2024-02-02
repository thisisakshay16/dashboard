// Pie.js

import React from 'react';
import './pie.css';

const Pie = () => {
  const data = [20, 30, 15, 25, 10];
  const colors = ['#4CAF50', '#5CBF4B', '#6DDA45', '#7EF540', '#8CFB36'];
  const categories = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'];

  const total = data.reduce((acc, value) => acc + value, 0);

  let startAngle = 0;

  return (
    <div className='bx'>
      <div className="pie-container">
        <svg viewBox="0 0 200 200" className="pie">
          {data.map((value, index) => {
            const percent = (value / total) * 100;
            const endAngle = startAngle + (percent * 3.6); // Convert percentage to degrees

            const pathData = `
              M 100 100
              L ${100 + Math.cos((startAngle * Math.PI) / 180) * 100} ${100 + Math.sin((startAngle * Math.PI) / 180) * 100}
              A 100 100 0 ${(percent > 50 ? 1 : 0)} 1 ${100 + Math.cos((endAngle * Math.PI) / 180) * 100} ${100 + Math.sin((endAngle * Math.PI) / 180) * 100}
              Z
            `;

            startAngle = endAngle;

            return <path key={index} d={pathData} fill={colors[index]} />;
          })}
        </svg>
        <div className="legend">
          {categories.map((category, index) => (
            <div key={index} className="legend-item d-flex">
              <div className="legend-color" style={{ backgroundColor: colors[index] }}></div>
              <div className="legend-text">{category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pie;
