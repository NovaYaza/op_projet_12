import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="SportSee logo" className="header__logo" />
      <nav className="header__nav">
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}