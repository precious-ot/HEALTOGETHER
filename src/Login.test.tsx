import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("renders learn react link", () => {
    render(<Login />);
    const emailElement = screen.getByPlaceholderText("you@example.com");
    const passwordElement = screen.getByLabelText("Password");
    const buttonElement = screen.getByRole("button", {name: "Sign in"});
    expect(emailElement).toBeInTheDocument();
    expect(passwordElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
});