import { render, screen } from "@testing-library/preact";
import { vi } from "vitest";
import SubscriptionsPage from "./SubscriptionsPage";
import { APP_LABELS } from "../../constants/labels/appLabels";
import { SUBSCRIPTION_PAGE } from "../../constants/labels/subscriptionPage";

vi.mock("../../utils/parseSubsctiptions/parseSubscriptions", () => ({
  parseSubscriptions: () => [
    {
      id: "123",
      brand: "Luxury Haircare",
      formula: "Olive & Herbal Oil",
      status: "ACTIVE",
      sync: "IN_SYNC",
    },
    {
      id: "456",
      brand: "Premium Scalp Care",
      formula: "Herbal Scalp Serum",
      status: "SUSPENDED",
      sync: "OUT_OF_SYNC",
    },
  ],
}));

describe("SubscriptionsPage Component", () => {
  test("renders page title", () => {
    render(<SubscriptionsPage />);
    expect(screen.getByText(APP_LABELS.TITLE)).toBeInTheDocument();
  });

  test("renders the subscriptions table", () => {
    render(<SubscriptionsPage />);
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  test("renders the source text", () => {
    render(<SubscriptionsPage />);
    expect(screen.getByText(SUBSCRIPTION_PAGE.SOURCE)).toBeInTheDocument();
  });
});
