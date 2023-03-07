import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (  
    <nav>
      <Link to='/home' className="links" id="welcome">
        Welcome!
      </Link>

      <ul className="navbar">
        <li>
          <Link to='/home' className="links">
            Home
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