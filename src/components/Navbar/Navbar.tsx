import './styles.scss';
import logo from "../assets/applelogo.png";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={logo} alt="applelogo"/>
      <a className="navbar__link_features" href="#">Features</a>
      <a className="navbar__link_partners" href="#">Partners</a>
      <a className="navbar__link_stories" href="#">Stories</a>
      <button className="navbar__btn">Download for free</button>
    </nav>
  )
}
