import { useState, useEffect } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[A-Za-z][A-Za-z '-]{1,}$/;

function getToday() {
  return new Date().toISOString().split("T")[0];
}

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0] || "");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("None");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (availableTimes.length > 0 && !availableTimes.includes(time)) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes, time]);

  useEffect(() => {
    const guestsNumber = Number(guests);
    const isValid =
      date !== "" &&
      time !== "" &&
      Number.isInteger(guestsNumber) &&
      guestsNumber >= 1 &&
      guestsNumber <= 10 &&
      NAME_REGEX.test(name.trim()) &&
      EMAIL_REGEX.test(email);
    setIsFormValid(isValid);
  }, [date, time, guests, name, email]);

  function handleDateChange(event) {
    const newDate = event.target.value;
    setDate(newDate);
    dispatch({ type: "UPDATE_TIMES", date: newDate });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    onSubmit({ date, time, guests, occasion, name, email });
  }

  return (
    <form className="reservations-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          min={getToday()}
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
          required
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
          step="1"
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
          minLength="2"
          pattern="[A-Za-z][A-Za-z '-]{1,}"
          title="Enter at least 2 letters (letters, spaces, hyphens and apostrophes only)"
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

      <button
        type="submit"
        className="reservations-submit"
        disabled={!isFormValid}
        aria-disabled={!isFormValid}
      >
        Reserve Table
      </button>
    </form>
  );
}

export default BookingForm;
