const testimonials = [
  { name: "Alex", rating: "★★★★★", quote: "Best Mediterranean food in Chicago!" },
  { name: "Sam", rating: "★★★★★", quote: "Great service and even better food." },
  { name: "Jordan", rating: "★★★★☆", quote: "The lemon dessert is unbeatable." },
  { name: "Taylor", rating: "★★★★★", quote: "My go-to spot for date night." },
];

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-cards">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <span className="testimonial-avatar" aria-hidden="true">
              {testimonial.name.charAt(0)}
            </span>
            <p className="testimonial-rating">{testimonial.rating}</p>
            <p className="testimonial-name">{testimonial.name}</p>
            <p>{testimonial.quote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
