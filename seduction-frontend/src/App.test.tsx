import { render, screen } from "@testing-library/preact";
import App from "./app";

describe("App Component", () => {
  test("renders SubscriptionsPage", () => {
    render(<App />);

    expect(screen.getByText("Subscriptions")).toBeInTheDocument();
  });
});
