import { Link } from 'react-router-dom';
import './Navbar.css';

const Header = () => (
  <nav className="header">
    <h1>Math Magicians</h1>
    <div className="header__menu">
      <Link className="header__link" to="/"> Home </Link>
      <Link className="header__link" to="/app"> Calculator </Link>
      <Link className="header__link" to="/quote"> Quote </Link>
    </div>
  </nav>
);

export default Header;
