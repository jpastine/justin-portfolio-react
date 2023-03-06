import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (  
    <nav>
      <Link to='/about'>
        Justin Pastine
      </Link>

      <div className="right">
        <Link to='/home'>
          Home
        </Link>
      </div>

      <div className="right">
        <Link to='/about'>
          About
        </Link>
      </div>

      <div className="right">
        <Link to='/contact' >
          Contact
        </Link>
      </div>

      <div className="right">
        <Link to='/projects'>
          Projects
        </Link>
      </div>

      <div className="right">
        <Link to='/resume' >
          Resume
        </Link>
      </div>
      

    </nav>
  );
}
 
export default NavBar;