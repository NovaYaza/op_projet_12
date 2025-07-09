import React from 'react'
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
  return (
    <main className="profile-page">
  <div className="main-container">
    <h1>Bonjour <span className="user-name">Thomas</span></h1>
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
        <NutritionCard icon={caloriesIcon} value={1930} unit="kCal" label="Calories" bgColor="rgba(255, 0, 0, 0.1)" />
        <NutritionCard icon={proteinIcon} value={155} unit="g" label="Protéines" bgColor="rgba(74, 184, 255, 0.1)" />
        <NutritionCard icon={carbsIcon} value={290} unit="g" label="Glucides" bgColor="rgba(249, 206, 35, 0.1)" />
        <NutritionCard icon={fatIcon} value={50} unit="g" label="Lipides" bgColor="rgba(253, 81, 129, 0.1)" />
      </div>
    </section>
  </div>
</main>
  )
}


/* import useFetch from '../services/useFetch'
import ScoreRadialChart from '../components/charts/ScoreRadialChart'
import DailyActivityChart from '../components/charts/ActivityChart'
import AverageSessionChart from '../components/charts/AverageSessionChart'
import PerformanceRadar from '../components/charts/PerformanceRadarChart'
import NutritionCard from '../components/cards/NutritionCard'

function Profile() {
  const userId = 12 // à rendre dynamique

  const { data: user, loading: userLoading } = useFetch(`${userId}`)
  const { data: activity } = useFetch(`${userId}/activity`)
  const { data: average } = useFetch(`${userId}/average-sessions`)
  const { data: performance } = useFetch(`${userId}/performance`)

  if (userLoading) return <p>Chargement...</p>

  const { firstName } = user.userInfos
  const score = user.todayScore || user.score
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = user.keyData

  return (
    <div className="profile">
      <h1>Bonjour <span className="name">{firstName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

      <div className="charts">
        <DailyActivityChart data={activity.sessions} />
        <AverageSessionChart data={average.sessions} />
        <PerformanceRadar data={performance} />
        <ScoreRadialChart score={score} />
      </div>

      <div className="nutrition">
        <NutritionCard icon="..." value={calorieCount} unit="kCal" label="Calories" bgColor="#FBEAEA" />
        <NutritionCard icon="..." value={proteinCount} unit="g" label="Protéines" bgColor="#E9F4FB" />
        <NutritionCard icon="..." value={carbohydrateCount} unit="g" label="Glucides" bgColor="#FBF6E5" />
        <NutritionCard icon="..." value={lipidCount} unit="g" label="Lipides" bgColor="#FBEAEF" />
      </div>
    </div>
  )
} */