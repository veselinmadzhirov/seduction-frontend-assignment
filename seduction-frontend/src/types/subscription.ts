export enum SubscriptionStatus {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  EXPIRED = "EXPIRED",
}

export enum SyncStatus {
  IN_SYNC = "IN_SYNC",
  OUT_OF_SYNC = "OUT_OF_SYNC",
  NOT_FOUND_S2 = "NOT_FOUND_S2",
  NOT_FOUND_TEMPTATION = "NOT_FOUND_TEMPTATION",
}

export interface Subscription {
  id: string;
  brand: string;
  formula: string;
  status: SubscriptionStatus;
  sync: SyncStatus;
}
