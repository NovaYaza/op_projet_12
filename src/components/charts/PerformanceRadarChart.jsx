import React from 'react'
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer
} from 'recharts'
import mockData from '../../mocks/performanceMock.json'

export default function PerformanceRadarChart() {
  const performance = mockData.data
  const kindLabels = performance.kind

  // Mapper le type de perf avec son label
  const formattedData = performance.data.map(item => ({
    subject: kindLabels[item.kind],
    value: item.value
  }))

  return (
    <div className="radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius="65%"
          data={formattedData}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#fff"
            tick={CustomPolarAngleAxisTick}
            tickLine={false}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

function CustomPolarAngleAxisTick({ payload, x, y, textAnchor }) {
  return (
    <text
      x={x}
      y={y}
      dy={4} // ← ajuste la hauteur
      fill="#FFFFFF"
      textAnchor={textAnchor}
      fontSize={12}
    >
      {payload.value}
    </text>
  )
}