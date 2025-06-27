import React from 'react'
import ActivityChart from '../components/charts/ActivityChart'

export default function ProfilePage() {
  return (
    <main className="profile-page">
      <h1>Bonjour <span className="user-name">Thomas</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

      <section className="charts-section">
        <ActivityChart />
      </section>
    </main>
  )
}