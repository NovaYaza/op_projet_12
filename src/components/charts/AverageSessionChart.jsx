import React from 'react'
import {
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Rectangle
} from 'recharts'
import mockData from '../../mocks/averageSessionsMock.json'

const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

export default function AverageSessionChart() {
  const rawData = mockData.data

  // Ajout des points fantômes à gauche et à droite
  const paddedData = [
    { day: 0, sessionLength: rawData[0].sessionLength },
    ...rawData.map((item, index) => ({
      ...item,
      dayLabel: days[index],
    })),
    { day: 8, sessionLength: rawData[rawData.length - 1].sessionLength }
  ]

  return (
    <div className="session-chart">
      <h2 className="session-title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={paddedData}
          margin={{ top: 60, right: 0, left: 0, bottom: 10 }}
        >
          <XAxis
            dataKey="dayLabel"
            axisLine={false}
            tickLine={false}
            stroke="#fff"
            tick={{ fontSize: 12, opacity: 0.5, dy: 10 }}
            padding={{ left: 0, right: 0 }}
            tickFormatter={(value, index) => {
              if (index === 0 || index === paddedData.length - 1) return ''
              return value
            }}
          />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              fill: '#fff',
              stroke: 'rgba(255,255,255,0.3)',
              strokeWidth: 10,
            }}
            animationDuration={400}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

// Tooltip personnalisé
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p>{payload[0].value} min</p>
      </div>
    )
  }
  return null
}

// Curseur personnalisé rouge foncé sur la droite
function CustomCursor({ points, width, height }) {
  const x = points[0].x
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.1)"
      x={x}
      y={0}
      width={width - x}
      height={height * 2}
    />
  )
}