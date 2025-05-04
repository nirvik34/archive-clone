import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Rewind</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">About</Link></li> {/* Link to the About page */}
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-buttons">
        <Link to="/signup">
          <button className="btn btn-signup">Sign up</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-login">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
