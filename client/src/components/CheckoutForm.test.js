import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  const header = screen.getByText(/Checkout Form/i);

  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const submitButton = screen.getByRole("button");

  fireEvent.change(firstNameInput, { target: { value: "Bob" } });
  fireEvent.change(lastNameInput, { target: { value: "Bobertson" } });
  fireEvent.change(addressInput, { target: { value: "123 Oak St" } });
  fireEvent.change(cityInput, { target: { value: "Milwaukee" } });
  fireEvent.change(stateInput, { target: { value: "Wisconsin" } });
  fireEvent.change(zipInput, { target: { value: "43210" } });
  fireEvent.click(submitButton);

  const successMessage = await screen.findByTestId("successMessage");

  expect(successMessage).toBeInTheDocument();
});
