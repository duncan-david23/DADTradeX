import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJs, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, Filler,} from 'chart.js';

// Register Components
ChartJs.register(LineElement, PointElement, LinearScale,CategoryScale, Title, Tooltip, Legend, Filler,)


const Chart = ({data, options}) => {

  


  return (
    <div>
      <Line data={data} options={options} style={{width: '810px', height:'420px', marginLeft:'-15px', marginTop:'30px'}}/>
    </div>
  )
}

export default Chart