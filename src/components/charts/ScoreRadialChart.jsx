import { useParams } from 'react-router-dom'
import useFetch from '../../services/useFetch'
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import { getEndpoint } from '../../services/dataSource'

export default function ScoreRadialChart() {
  const { id } = useParams()
  const { data, loading, error } = useFetch(getEndpoint('main', id), id)

  if (loading) return <p>Chargement…</p>
  if (error) return <p>Erreur : {error}</p>

  const user = data.data
  const score = user.todayScore ?? user.score // certains users ont `score`, d'autres `todayScore`

  const scoreData = [
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
          data={scoreData}
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