import './styles.scss';
import logo from "../../assets/logo.svg";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={logo} alt="applelogo" />
      <ul className="navbar__links">
        <li><a className="navbar__link_features" href="#">Features</a></li>
        <li><a className="navbar__link_partners" href="#">Partners</a></li>
        <li><a className="navbar__link_stories" href="#">Stories</a></li>
      </ul>
      <button className="navbar__btn" type="button">Download for free</button>
    </nav>
  )
}