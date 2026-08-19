import greekSalad from "../assets/greek-salad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon-dessert.jpg";

const dishes = [
  {
    name: "Greek Salad",
    price: "$12.99",
    image: greekSalad,
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.",
  },
  {
    name: "Bruschetta",
    price: "$5.99",
    image: bruschetta,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    image: lemonDessert,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be.",
  },
];

function Specials() {
  return (
    <section className="specials" id="menu" aria-labelledby="specials-heading">
      <div className="specials-header">
        <h2 id="specials-heading">This week's specials!</h2>
        <button type="button" aria-label="On Click">
          Online Menu
        </button>
      </div>
      <div className="specials-cards">
        {dishes.map((dish) => (
          <article className="specials-card" key={dish.name}>
            <img src={dish.image} alt={dish.name} />
            <div className="specials-card-body">
              <div className="specials-card-title">
                <h3>{dish.name}</h3>
                <span>{dish.price}</span>
              </div>
              <p>{dish.description}</p>
              <a href="/order-online">Order a delivery</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
