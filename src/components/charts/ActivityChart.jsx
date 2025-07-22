import { useParams } from 'react-router-dom'
import useFetch from '../../services/useFetch'
import { getEndpoint } from '../../services/dataSource'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

export default function ActivityChart() {
  const { id } = useParams()
  const { data, loading, error } = useFetch(getEndpoint('activity', id), id)

  if (loading) return <p>Chargement…</p>
  if (error) return <p>Erreur : {error}</p>
  if (!data?.data) return <p>Aucune donnée</p>

  const formattedSessions = data.data.sessions.map((session, index) => ({
  ...session,
  day: index + 1  // transforme la date en numéro de jour
}))

const kilos = formattedSessions.map(s => s.kilogram)
const min = Math.min(...kilos)
const max = Math.max(...kilos)

const ticks = []
for (let i = Math.floor(min - 1); i <= Math.ceil(max + 1); i++) {
  ticks.push(i)
}

// Affichage des lignes horizontales pour les données sur l'axe Y
const referenceLines = ticks.map((tick) => (
    <ReferenceLine
      key={`ref-${tick}`}
      y={tick}
      stroke="#000"
      strokeDasharray="3 3"
      strokeOpacity={0.2}
      yAxisId="kg"
    />
  ))

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
        <BarChart data={formattedSessions} barGap={8} barSize={7}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
          {referenceLines}
          <XAxis dataKey="day" tickLine={false} />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            domain={['dataMin - 1', 'dataMax + 1']}
            ticks={ticks}
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