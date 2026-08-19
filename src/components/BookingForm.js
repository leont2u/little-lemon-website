import { useState } from "react";

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("None");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleDateChange(event) {
    const newDate = event.target.value;
    setDate(newDate);
    dispatch({ type: "UPDATE_TIMES", date: newDate });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ date, time, guests, occasion, name, email });
  }

  return (
    <form className="reservations-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        >
          {availableTimes.map((availableTime) => (
            <option key={availableTime}>{availableTime}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="res-guests">Number of guests</label>
        <input
          type="number"
          id="res-guests"
          min="1"
          max="10"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-occasion">Occasion</label>
        <select
          id="res-occasion"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
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
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-email">Email</label>
        <input
          type="email"
          id="res-email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <button type="submit" className="reservations-submit">
        Reserve Table
      </button>
    </form>
  );
}

export default BookingForm;
