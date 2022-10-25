import React, { useEffect, useState } from 'react'
import { Pie,Bar,Line } from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
import {CategoryScale,registerables} from 'chart.js'; 
Chart.register(CategoryScale);
Chart.register(ArcElement);
Chart.register(...registerables);

const BarChart = ({imports,exports}) => {

  return (
    <div>
      <Pie
        data={{
          labels: ['Import', 'Export'],
          datasets: [
            {
              label: '# of votes',
              data: [imports,exports],
              backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(153, 102, 255, 0.2)',
              
          
              ],
              borderColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(153, 102, 255, 0.2)',
             
               
              ],

              borderWidth: 1,
            },

        
          ],
        }}
        height={280}
        width={600}
        options={{
          maintainAspectRatio: false,
      
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
        
      />
   
    </div>
  )
}

export default BarChart