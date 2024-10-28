import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJs, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, Filler,} from 'chart.js';
import {stockPrices} from '../assets/data';
// Register Components
ChartJs.register(LineElement, PointElement, LinearScale,CategoryScale, Title, Tooltip, Legend, Filler,)


const PortfolioChart = () => {

  
  


    const data = {
      labels: stockPrices.map(item=> item.time),
      datasets: [
        {
          label: 'Portfolio',
          data: stockPrices.map(item=> item.price),
          fill: true,
          backgroundColor: 'rgba(147, 112, 219, 0.1)',
          borderColor: 'rgba(147, 112, 219, 0.5)',
          tension:0.1
        }
      ]
    };

    const options = {
      responsive:true,
      plugins: {
        legend: {
          position: "top",
          display: false
        },
        title: {
          display: false,
          text: 'Portfolio Performance'
        },
      },
      scales: { 
        x: { 
          display: false,
          beginAtZero: true,
          grid: {
            display: false
          }
        }, 
        y: { 
          position: 'right',
          grid: {
            display: false // Hides the grid lines for the y-axis
        }
        } 
    }
        
    };


  return (
    <div>
      <Line data={data} options={options} style={{width: '810px', height:'420px', marginLeft:'-15px', marginTop:'30px'}}/>
    </div>
  )
}

export default PortfolioChart