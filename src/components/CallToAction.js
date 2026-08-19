import { Link } from "react-router-dom";
import restaurantFood from "../assets/restauranfood.jpg";

function CallToAction() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero-text">
        <h1 id="hero-heading">Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <Link to="/booking" className="button-link">
          Reserve a Table
        </Link>
      </div>
      <div className="hero-image">
        <img src={restaurantFood} alt="A dish served at Little Lemon" />
      </div>
    </section>
  );
}

export default CallToAction;
