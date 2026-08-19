import restaurantFood from "../assets/restauranfood.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <a href="#reservations" className="button-link">
          Reserve a Table
        </a>
      </div>
      <div className="hero-image">
        <img src={restaurantFood} alt="A dish served at Little Lemon" />
      </div>
    </section>
  );
}

export default Hero;
