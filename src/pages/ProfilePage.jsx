import { useParams } from 'react-router-dom'
import useFetch from '../services/useFetch'
import { getEndpoint } from '../services/dataSource'

import UserNotFound from '../pages/UserNotFound'
import ActivityChart from '../components/charts/ActivityChart'
import AverageSessionChart from '../components/charts/AverageSessionChart'
import PerformanceRadarChart from '../components/charts/PerformanceRadarChart'
import ScoreRadialChart from '../components/charts/ScoreRadialChart'
import NutritionCard from '../components/cards/NutritionCard'

import caloriesIcon from '../assets/icons/energy.png'
import proteinIcon from '../assets/icons/chicken.png'
import carbsIcon from '../assets/icons/apple.png'
import fatIcon from '../assets/icons/cheeseburger.png'

export default function ProfilePage() {

  const { id } = useParams()
  const { data, loading, error } = useFetch(getEndpoint('main', id), id)

  if (loading) return <p>Chargement…</p>
  if (error || !data?.data) return <UserNotFound />

  const keyData = data.data.keyData

  return (
  <main className="profile-page">
    <div className="main-container">
      <h1>Bonjour <span className="user-name">{data.data.userInfos.firstName}</span></h1>
      <p className='text_accueil'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

      <section className="charts-section">
        <div className='left_part'>
          <ActivityChart />
          <div className='group_graph'>
            <AverageSessionChart />
            <PerformanceRadarChart />
            <ScoreRadialChart />
          </div>
        </div>
        <div className='group_nutritionCard'>
          <NutritionCard icon={caloriesIcon} value={keyData.calorieCount} unit="kCal" label="Calories" bgColor="rgba(255, 0, 0, 0.1)" />
          <NutritionCard icon={proteinIcon} value={keyData.proteinCount} unit="g" label="Protéines" bgColor="rgba(74, 184, 255, 0.1)" />
          <NutritionCard icon={carbsIcon} value={keyData.carbohydrateCount} unit="g" label="Glucides" bgColor="rgba(249, 206, 35, 0.1)" />
          <NutritionCard icon={fatIcon} value={keyData.lipidCount} unit="g" label="Lipides" bgColor="rgba(253, 81, 129, 0.1)" />
        </div>
      </section>
    </div>
</main>
  )
}