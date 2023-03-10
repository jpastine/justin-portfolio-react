import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (  
    <nav>
      <Link to='/' className="links" id="welcome">
        Welcome!
      </Link>

      <ul className="navbar">
        <li>
          <Link to='/' className="links">
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