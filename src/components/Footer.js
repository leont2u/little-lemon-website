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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
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
