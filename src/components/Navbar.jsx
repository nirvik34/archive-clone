import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Rewind</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`navbar-links ${isOpen ? "show" : ""}`}>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className={`navbar-buttons ${isOpen ? "show" : ""}`}>
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
