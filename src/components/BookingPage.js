import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section
      className="reservations"
      id="reservations"
      aria-labelledby="reservations-heading"
    >
      <h1 id="reservations-heading">Reserve a Table</h1>
      <p>Book your spot for an evening of Mediterranean flavor.</p>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={submitForm}
      />
    </section>
  );
}

export default BookingPage;
