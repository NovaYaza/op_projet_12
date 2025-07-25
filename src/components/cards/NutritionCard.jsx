export default function NutritionCard({ icon, value, unit, label, bgColor }) {
  return (
    <div className="nutrition-card">
      <div className="nutrition-card__icon" style={{ backgroundColor: bgColor }}>
        <img src={icon} alt={label} />
      </div>
      <div className="nutrition-card__info">
        <p className="nutrition-card__value">
          {value.toLocaleString('en-US')}
          {unit}
        </p>
        <p className="nutrition-card__label">{label}</p>
      </div>
    </div>
  )
}