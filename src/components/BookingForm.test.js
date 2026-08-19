import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm date label", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      dispatch={() => {}}
      onSubmit={() => {}}
    />
  );
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});
