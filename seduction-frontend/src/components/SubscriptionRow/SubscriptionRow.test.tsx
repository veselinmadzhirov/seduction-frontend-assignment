import { render, screen, cleanup } from "@testing-library/preact";
import SubscriptionRow from "./SubscriptionRow";
import { Subscription, SubscriptionStatus, SyncStatus } from "../../types/subscription";
import { BADGE_TYPE_MAP } from "../../constants/badgeTypeMap";
import styles from "./SubscriptionRow.module.css";
import * as labels from "../../constants/labels/subscriptionRowLabels";
import { vi } from "vitest";

vi.mock("../Badge/Badge", () => ({
  default: ({ type, value }: { type: string; value: string }) => (
    <span data-testid={`badge-${type}`}>{value}</span>
  ),
}));

describe("SubscriptionRow Component", () => {
  const mockSubscription: Subscription = {
    id: "123",
    brand: "PAR_B",
    formula: "PAR_P_B",
    status: SubscriptionStatus.ACTIVE,
    sync: SyncStatus.IN_SYNC,
  };

  test("renders subscription data correctly", () => {
    render(<SubscriptionRow subscription={mockSubscription} />);

    expect(screen.getByText(mockSubscription.id)).toBeInTheDocument();
    expect(screen.getByText(mockSubscription.brand)).toBeInTheDocument();
    expect(screen.getByText(mockSubscription.formula)).toBeInTheDocument();
  });

  test("renders status and sync badges correctly", () => {
    render(<SubscriptionRow subscription={mockSubscription} />);

    const statusBadges = screen.getAllByTestId(`badge-${BADGE_TYPE_MAP.status}`);
    const syncBadges = screen.getAllByTestId(`badge-${BADGE_TYPE_MAP.sync}`);

    expect(statusBadges.length).toBeGreaterThan(0);
    expect(syncBadges.length).toBeGreaterThan(0);

    expect(statusBadges[0]).toHaveTextContent("ACTIVE");
    expect(syncBadges[0]).toHaveTextContent("IN_SYNC");
  });

  test("applies correct class to table row", () => {
    const { container } = render(<SubscriptionRow subscription={mockSubscription} />);
    const tableRow = container.querySelector("tr");

    expect(tableRow).toHaveClass(styles.row);
  });

  test("applies correct class to table cells", () => {
    const { container } = render(<SubscriptionRow subscription={mockSubscription} />);
    const tableCells = container.querySelectorAll("td");

    tableCells.forEach((cell) => {
      expect(cell).toHaveClass(styles.cell);
    });
  });

  test("renders different statuses and sync states correctly", () => {
    const statuses = [
      SubscriptionStatus.ACTIVE,
      SubscriptionStatus.SUSPENDED,
      SubscriptionStatus.EXPIRED,
    ];
    const syncStates = [SyncStatus.IN_SYNC, SyncStatus.OUT_OF_SYNC, SyncStatus.IN_SYNC];

    statuses.forEach((status) => {
      syncStates.forEach((sync) => {
        cleanup();

        const subscription: Subscription = {
          id: `test-${status}-${sync}`,
          brand: "Test Brand",
          formula: "Test Formula",
          status,
          sync,
        };

        render(<SubscriptionRow subscription={subscription} />);

        const statusBadges = screen.getAllByTestId(`badge-${BADGE_TYPE_MAP.status}`);
        const syncBadges = screen.getAllByTestId(`badge-${BADGE_TYPE_MAP.sync}`);

        expect(statusBadges.length).toBeGreaterThan(0);
        expect(syncBadges.length).toBeGreaterThan(0);

        expect(statusBadges[0]).toHaveTextContent(status);
        expect(syncBadges[0]).toHaveTextContent(sync);
      });
    });
  });

  test("subscriptionRowLabels should be defined", () => {
    expect(labels).toBeDefined();
    expect(Object.keys(labels).length).toBeGreaterThan(0);
  });
});
