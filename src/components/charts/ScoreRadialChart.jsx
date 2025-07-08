import React from 'react'
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer
} from 'recharts'
import mockData from '../../mocks/scoreMock.json'

export default function ScoreRadialChart() {
  const score = mockData.data.todayScore

  const data = [
    {
      name: 'score',
      value: score * 100, // pourcentage
      fill: '#FF0000'
    }
  ]

  return (
    <div className="score-chart">
      <h2 className="score-title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          barSize={10}
          startAngle={90}
          endAngle={450}
          data={data}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            clockWise
            dataKey="value"
            cornerRadius={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="score-center">
        <p><span>{score * 100}%</span><br />de votre<br />objectif</p>
      </div>
    </div>
  )
}