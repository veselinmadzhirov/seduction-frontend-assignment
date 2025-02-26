import styles from "./SubscriptionsTable.module.css";
import SubscriptionRow from "../SubscriptionRow/SubscriptionRow";
import { Subscription } from "../../types/subscription";
import { SUBSCRIPTIONS_TABLE_LABELS } from "../../constants/labels/subscriptionsTableLabels";

interface SubscriptionsTableProps {
  subscriptions: Subscription[];
}

const SubscriptionsTable = ({ subscriptions }: SubscriptionsTableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>{SUBSCRIPTIONS_TABLE_LABELS.HEADERS.ID}</th>
          <th>{SUBSCRIPTIONS_TABLE_LABELS.HEADERS.BRAND}</th>
          <th>{SUBSCRIPTIONS_TABLE_LABELS.HEADERS.FORMULA}</th>
          <th>{SUBSCRIPTIONS_TABLE_LABELS.HEADERS.STATUS}</th>
          <th>{SUBSCRIPTIONS_TABLE_LABELS.HEADERS.SYNC}</th>
        </tr>
      </thead>
      <tbody>
        {subscriptions.map((sub, index) => (
          <SubscriptionRow key={`${sub.id}-${index}`} subscription={sub} />
        ))}
      </tbody>
    </table>
  );
};

export default SubscriptionsTable;
