import React, { useEffect, useState } from 'react';
import { fetchGraphData } from '../../services/apiService';
import ReactApexChart from 'react-apexcharts';
import "./LineGraph.css"

const LineGraph = () => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    // Fetch graph data
    fetchGraphData().then((data) => {setGraphData(data)
      console.log('dataa',data)
    }  );
   
  }, []);

  const chartOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#ffffff'], // Set the background color to white
        opacity: 1 // Set opacity to 1 to make the background fully opaque
      },
      borderColor: '#000000', // Set border color to black
    },
    xaxis: {
      categories: graphData.map((point) => point.x),
    }
  };

  const chartSeries = [
    {
      data: graphData.map((point) => point.y),
    }
  ];

  return (
    <div className='charts'>
      <div id="chart">
        <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={350} width={600}/>
      </div>
    </div>
  );
};

export default LineGraph;
