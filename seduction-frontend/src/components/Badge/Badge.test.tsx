import { render, screen } from "@testing-library/preact";
import Badge from "./Badge";
import styles from "./Badge.module.css";

describe("Badge Component", () => {
  test("renders correct status label", () => {
    render(<Badge type="STATUS" value="ACTIVE" />);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  test("renders correct sync label", () => {
    render(<Badge type="SYNC" value="IN_SYNC" />);
    expect(screen.getByText("In sync")).toBeInTheDocument();
  });

  test("applies correct class for status", () => {
    render(<Badge type="STATUS" value="SUSPENDED" />);
    const badge = screen.getByText("Suspended");
    expect(badge).toHaveClass(styles.badge, styles.STATUS);
  });
});
