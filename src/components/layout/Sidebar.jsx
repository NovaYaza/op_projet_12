import meditationIcon from '../../assets/icons/meditation_icon.png'
import swimmingIcon from '../../assets/icons/swimming_icon.png'
import cyclingIcon from '../../assets/icons/cycling_icon.png'
import weightIcon from '../../assets/icons/weight_icon.png'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar_icons">
        <img src={meditationIcon} alt="Méditation" />
        <img src={swimmingIcon} alt="Natation" />
        <img src={cyclingIcon} alt="Cyclisme" />
        <img src={weightIcon} alt="Musculation" />
      </div>
      <div className="sidebar_bottom">
        <p className="sidebar_copyright">Copyright, SportSee 2020</p>
      </div>
    </aside>
  )
}