// __tests__/NewTaskForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm"; // Make sure the import is correct

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();
  render(<NewTaskForm onTaskFormSubmit={onTaskFormSubmit} />);

  // Update the input value
  fireEvent.change(screen.getByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });

  // Update the category dropdown
  fireEvent.change(screen.getByRole('combobox'), {
    target: { value: 'Food' },
  });

  // Submit the form
  fireEvent.submit(screen.getByRole("form"));

  // Check that the callback was called with the correct data
  expect(onTaskFormSubmit).toHaveBeenCalledWith({
    text: "Pass the tests",
    category: "Food",
  });
});