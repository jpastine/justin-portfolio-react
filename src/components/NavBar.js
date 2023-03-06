import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (  
    <nav>
      <Link to='/about' className="links">
        Justin Pastine
      </Link>

      <ul className="navbar">
        <li>
          <Link to='/home' className="links">
            Home
          </Link>
        </li>

        <li>
          <Link to='/about' className="links">
            About
          </Link>
        </li>

        <li>
          <Link to='/contact' className="links">
            Contact
          </Link>
        </li>

        <li>
          <Link to='/projects' className="links">
            Projects
          </Link>
        </li>

        <li>
          <Link to='/resume' className="links">
            Resume
          </Link>
        </li>
      </ul>
      

    </nav>
  );
}
 
export default NavBar;