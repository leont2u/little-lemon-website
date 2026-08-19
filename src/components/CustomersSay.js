const testimonials = [
  { name: "Alex", stars: 5, quote: "Best Mediterranean food in Chicago!" },
  { name: "Sam", stars: 5, quote: "Great service and even better food." },
  { name: "Jordan", stars: 4, quote: "The lemon dessert is unbeatable." },
  { name: "Taylor", stars: 5, quote: "My go-to spot for date night." },
];

function CustomersSay() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">Testimonials</h2>
      <div className="testimonials-cards">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <span className="testimonial-avatar" aria-hidden="true">
              {testimonial.name.charAt(0)}
            </span>
            <p
              className="testimonial-rating"
              aria-label={`Rated ${testimonial.stars} out of 5 stars`}
            >
              <span aria-hidden="true">
                {"★".repeat(testimonial.stars)}
                {"☆".repeat(5 - testimonial.stars)}
              </span>
            </p>
            <p className="testimonial-name">{testimonial.name}</p>
            <p>{testimonial.quote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
