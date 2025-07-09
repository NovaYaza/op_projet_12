import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import activityMock from '../../mocks/activityMock.json'

export default function ActivityChart() {
  const data = activityMock.data

  return (
    <div className="activity-chart">
      <div className="chart-header">
        <h2 className="chart-title">Activité quotidienne</h2>
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-dot kg"></span>
            <span className="legend-text">Poids (kg)</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot cal"></span>
            <span className="legend-text">Calories brûlées (kCal)</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barGap={8} barSize={7}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} />
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
        <p className='tooltip_kilo'>{payload.find(p => p.dataKey === 'kilogram')?.value}kg</p>
        <p>{payload.find(p => p.dataKey === 'calories')?.value}kCal</p>
      </div>
    )
  }
  return null
}