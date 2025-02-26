import { parseSubscriptions } from "./parseSubscriptions";
import { vi } from "vitest";

const mockData = {
  subscriptions: [
    { id: "123", brand: "AD", formula: "AD_P", status: "active", sync: "in_sync" },
    { id: "456", brand: "VK", formula: "VK_C", status: "UNKNOWN", sync: "UNKNOWN" },
  ],
};

vi.mock("../data/subscriptions.json", () => mockData);

describe("parseSubscriptions", () => {
  test("converts status & sync to uppercase", () => {
    const parsed = parseSubscriptions();
    expect(parsed[0].status).toBe("ACTIVE");
    expect(parsed[0].sync).toBe("IN_SYNC");
  });

  test("handles unknown values by falling back to defaults", () => {
    const parsed = parseSubscriptions();
    expect(parsed[1].status).toBe("ACTIVE"); 
    expect(parsed[1].sync).toBe("IN_SYNC");
  });
});
