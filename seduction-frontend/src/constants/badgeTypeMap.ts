export const BADGE_TYPE_MAP = {
  status: "STATUS",
  sync: "SYNC",
} as const;

export type BadgeTypeKey = keyof typeof BADGE_TYPE_MAP;
export type BadgeTypeValue = (typeof BADGE_TYPE_MAP)[keyof typeof BADGE_TYPE_MAP];
