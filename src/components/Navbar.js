import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="Navbar">
    <h1>Math Magicians</h1>
    <div className="Navbar__menu">
      <Link className="Navbar__link" to="/"> Home </Link>
      <Link className="Navbar__link" to="/app"> Calculator </Link>
      <Link className="Navbar__link" to="/quote"> Quote </Link>
    </div>
  </nav>
);

export default Navbar;
