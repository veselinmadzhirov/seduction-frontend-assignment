export const BADGE_LABELS = {
  STATUS: {
    ACTIVE: "Active",
    SUSPENDED: "Suspended",
    EXPIRED: "Expired",
  },
  SYNC: {
    IN_SYNC: "In sync",
    OUT_OF_SYNC: "Out of sync",
    NOT_FOUND_S2: "Not found in S2",
    NOT_FOUND_TEMPTATION: "Not found in Temptation",
  },
};

export type BadgeType = keyof typeof BADGE_LABELS;
export type BadgeValue<T extends BadgeType> = keyof (typeof BADGE_LABELS)[T];
