import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import activityMock from '../../mocks/activityMock.json'

export default function ActivityChart() {
  const data = activityMock.data

  return (
    <div className="activity-chart">
      <h2 className="chart-title">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barGap={8} barSize={7}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            domain={['dataMin - 1', 'dataMax + 1']}
          />
          <YAxis
            yAxisId="cal"
            hide={true}
            dataKey="calories"
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            height={36}
            formatter={(value) =>
              value === 'kilogram' ? 'Poids (kg)' : 'Calories brûlées (kCal)'
            }
          />
          <Bar yAxisId="kg" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
          <Bar yAxisId="cal" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

// Tooltip personnalisé
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}kCal</p>
      </div>
    )
  }
  return null
}