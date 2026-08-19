import { useState } from "react";

const initialFormState = {
  date: "",
  time: "",
  guests: 2,
  occasion: "None",
  name: "",
  email: "",
};

function BookingPage() {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="reservations" id="reservations">
        <h2>Reservations</h2>
        <div className="reservations-confirmation">
          <p>
            Thank you, {form.name || "guest"}! Your table for {form.guests} on{" "}
            {form.date || "your chosen date"} at {form.time || "your chosen time"} is
            confirmed.
          </p>
          <button type="button" onClick={() => { setForm(initialFormState); setSubmitted(false); }}>
            Book Another Table
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="reservations" id="reservations">
      <h2>Reserve a Table</h2>
      <p>Book your spot for an evening of Mediterranean flavor.</p>
      <form className="reservations-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="res-date">Date</label>
          <input
            type="date"
            id="res-date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="res-time">Time</label>
          <input
            type="time"
            id="res-time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="res-guests">Number of Guests</label>
          <input
            type="number"
            id="res-guests"
            name="guests"
            min="1"
            max="10"
            value={form.guests}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="res-occasion">Occasion</label>
          <select
            id="res-occasion"
            name="occasion"
            value={form.occasion}
            onChange={handleChange}
          >
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Business</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="res-name">Name</label>
          <input
            type="text"
            id="res-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="res-email">Email</label>
          <input
            type="email"
            id="res-email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="reservations-submit">
          Reserve Table
        </button>
      </form>
    </section>
  );
}

export default BookingPage;
