import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import { useParams } from 'react-router-dom'
import useFetch from '../../services/useFetch'
import { getEndpoint } from '../../services/dataSource'

export default function PerformanceRadarChart() {
  const { id } = useParams()
  const { data, loading, error } = useFetch(getEndpoint('performance', id), id)

  if (loading) return <p>Chargement…</p>
  if (error) return <p>Erreur : {error}</p>

  const performance = data.data

  // Formater les noms des données en Français
  const kindLabels = {
    cardio: 'Cardio',
    energy: 'Énergie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité'
  }

  // Formatter les données avec leurs labels textuels
  const formattedData = performance.data.map(item => ({
    value: item.value,
    kind: kindLabels[performance.kind[item.kind]]
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
            dataKey="kind"
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
      dy={4}
      fill="#FFFFFF"
      textAnchor={textAnchor}
      fontSize={12}
    >
      {payload.value}
    </text>
  )
}