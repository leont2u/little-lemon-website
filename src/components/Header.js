import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <Link to="/" aria-label="Little Lemon home">
        <img src={logo} alt="" />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
