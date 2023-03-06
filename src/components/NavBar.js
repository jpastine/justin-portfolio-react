import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (  
    <nav>
      <Link to='/about'>
        Justin Pastine
      </Link>

      <ul>
        <li>
          <Link to='/home'>
            Home
          </Link>
        </li>

        <li>
          <Link to='/about'>
            About
          </Link>
        </li>

        <li>
          <Link to='/contact' >
            Contact
          </Link>
        </li>

        <li>
          <Link to='/projects'>
            Projects
          </Link>
        </li>

        <li>
          <Link to='/resume' >
            Resume
          </Link>
        </li>
      </ul>
      

    </nav>
  );
}
 
export default NavBar;