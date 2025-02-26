import { Subscription } from "../../types/subscription";
import rawData from "../../data/subscriptions.json";

export const parseSubscriptions = (): Subscription[] => {
  return (rawData as { subscriptions: Subscription[] }).subscriptions.map((sub) => ({
    ...sub,
    status: sub.status.toUpperCase(),
    sync: sub.sync.toUpperCase(),
  })) as Subscription[];
};
