import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const availableTimes = ["17:00", "18:00", "19:00"];

function renderForm(props = {}) {
  const dispatch = jest.fn();
  const onSubmit = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      onSubmit={onSubmit}
      {...props}
    />
  );
  return { dispatch, onSubmit };
}

function fillValidForm() {
  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: "2026-09-01" },
  });
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "4" },
  });
  fireEvent.change(screen.getByLabelText("Name"), {
    target: { value: "Jane Doe" },
  });
  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "jane@example.com" },
  });
}

test("Renders the BookingForm date label", () => {
  renderForm();
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

describe("HTML5 validation attributes", () => {
  test("date field is required and cannot be set before today", () => {
    renderForm();
    const dateInput = screen.getByLabelText("Choose date");
    const today = new Date().toISOString().split("T")[0];
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("min", today);
  });

  test("time field is required", () => {
    renderForm();
    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toBeRequired();
  });

  test("guests field only accepts a whole number between 1 and 10", () => {
    renderForm();
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("step", "1");
    expect(guestsInput).toBeRequired();
  });

  test("occasion field is optional", () => {
    renderForm();
    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).not.toBeRequired();
  });

  test("name field requires at least 2 letters", () => {
    renderForm();
    const nameInput = screen.getByLabelText("Name");
    expect(nameInput).toBeRequired();
    expect(nameInput).toHaveAttribute("minlength", "2");
    expect(nameInput).toHaveAttribute("pattern", "[A-Za-z][A-Za-z '-]{1,}");
  });

  test("email field requires a value of type email", () => {
    renderForm();
    const emailInput = screen.getByLabelText("Email");
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toBeRequired();
  });
});

describe("client-side (React) form validation", () => {
  test("submit button is disabled when required fields are empty", () => {
    renderForm();
    const submitButton = screen.getByRole("button", { name: "Reserve Table" });
    expect(submitButton).toBeDisabled();
  });

  test("submit button becomes enabled once every field is valid", () => {
    renderForm();
    const submitButton = screen.getByRole("button", { name: "Reserve Table" });
    fillValidForm();
    expect(submitButton).not.toBeDisabled();
  });

  test("submit button stays disabled when the name fails the pattern", () => {
    renderForm();
    const submitButton = screen.getByRole("button", { name: "Reserve Table" });
    fillValidForm();
    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "1" } });
    expect(submitButton).toBeDisabled();
  });

  test("submit button stays disabled when the email is malformed", () => {
    renderForm();
    const submitButton = screen.getByRole("button", { name: "Reserve Table" });
    fillValidForm();
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "not-an-email" },
    });
    expect(submitButton).toBeDisabled();
  });

  test("submit button stays disabled when the guest count is out of range", () => {
    renderForm();
    const submitButton = screen.getByRole("button", { name: "Reserve Table" });
    fillValidForm();
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "0" },
    });
    expect(submitButton).toBeDisabled();
  });

  test("submit calls onSubmit with the form data once valid and clicked", () => {
    const { onSubmit } = renderForm();
    fillValidForm();
    fireEvent.click(screen.getByRole("button", { name: "Reserve Table" }));
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        date: "2026-09-01",
        time: "17:00",
        guests: "4",
        occasion: "None",
        name: "Jane Doe",
        email: "jane@example.com",
      })
    );
  });
});
