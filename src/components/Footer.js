import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="Little Lemon logo" />
      </div>
      <div className="footer-column">
        <h3>Navigation</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact</h3>
        <ul>
          <li>123 Lemon St, Chicago, IL</li>
          <li>(312) 555-0123</li>
          <li>info@littlelemon.com</li>
        </ul>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
