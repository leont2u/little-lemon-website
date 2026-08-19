import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <section className="reservations" id="confirmed">
      <h2>Booking Confirmed</h2>
      <div className="reservations-confirmation">
        <p>
          Your table has been reserved. We look forward to welcoming you to
          Little Lemon!
        </p>
        <Link to="/" className="button-link">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
