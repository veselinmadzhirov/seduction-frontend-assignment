import { render, screen } from "@testing-library/preact";
import SubscriptionsTable from "./SubscriptionsTable";
import { Subscription, SubscriptionStatus, SyncStatus } from "../../types/subscription";

const mockSubscriptions: Subscription[] = [
  {
    id: "123",
    brand: "AD",
    formula: "AD_P",
    status: SubscriptionStatus.ACTIVE,
    sync: SyncStatus.IN_SYNC,
  },
  {
    id: "456",
    brand: "VK",
    formula: "VK_C",
    status: SubscriptionStatus.SUSPENDED,
    sync: SyncStatus.NOT_FOUND_S2,
  },
];

describe("SubscriptionsTable", () => {
  test("renders table headers correctly", () => {
    render(<SubscriptionsTable subscriptions={mockSubscriptions} />);
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Brand")).toBeInTheDocument();
    expect(screen.getByText("Formula")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Sync")).toBeInTheDocument();
  });

  test("renders correct number of rows", () => {
    render(<SubscriptionsTable subscriptions={mockSubscriptions} />);
    expect(screen.getAllByRole("row")).toHaveLength(3);
  });

  test("renders subscription details correctly", () => {
    render(<SubscriptionsTable subscriptions={mockSubscriptions} />);
    expect(screen.getByText("123")).toBeInTheDocument();
    expect(screen.getByText("AD")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
  });
});
