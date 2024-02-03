import React, { useEffect, useState } from 'react';
import { fetchPieChartData } from '../../services/apiService';
import './pie.css';

const Pie = () => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    // Fetch graph data
    fetchPieChartData().then((data) => {setGraphData(data)
      console.log('dataa',data)
    }  );
   
  }, []);


  const data = graphData.map(x => x.value);
  console.log('data----',data)
  const colors = ['#7ec18b', '#97cea3', '#b2dcbb', '#cee8d4', '#ecf5ed'];
  const categories = graphData.map(x => x.label);;

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
