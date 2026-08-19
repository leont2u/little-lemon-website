import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="reservations" id="reservations">
      <h2>Reserve a Table</h2>
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
