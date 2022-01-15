import  React from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
return( <nav>
  <Link to="/" className="link"> Home</Link>
  <Link to="/Aboutus" className="link"> About</Link>
  <Link to="/Contact" className="link"> Contact</Link>
</nav>
);
}
export default Navbar;