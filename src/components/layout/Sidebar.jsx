import React from 'react'
import meditationIcon from '../../assets/icons/meditation_icon.png'
import swimmingIcon from '../../assets/icons/swimming_icon.png'
import cyclingIcon from '../../assets/icons/cycling_icon.png'
import weightIcon from '../../assets/icons/weight_icon.png'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__icons">
        <img src={meditationIcon} alt="Méditation" />
        <img src={swimmingIcon} alt="Natation" />
        <img src={cyclingIcon} alt="Cyclisme" />
        <img src={weightIcon} alt="Musculation" />
      </div>
      <p className="sidebar__copyright">
        Copyright, SportSee 2020
      </p>
    </aside>
  )
}