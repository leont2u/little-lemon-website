import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="Little Lemon logo" />
      </div>
      <nav className="footer-column" aria-label="Footer">
        <h3>Navigation</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
        </ul>
      </nav>
      <div className="footer-column">
        <h3 id="footer-contact-heading">Contact</h3>
        <address aria-labelledby="footer-contact-heading">
          <ul>
            <li>123 Lemon St, Chicago, IL</li>
            <li><a href="tel:+13125550123">(312) 555-0123</a></li>
            <li><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
          </ul>
        </address>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
