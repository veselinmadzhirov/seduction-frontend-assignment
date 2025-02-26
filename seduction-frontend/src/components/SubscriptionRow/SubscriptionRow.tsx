import styles from "./SubscriptionRow.module.css";
import Badge from "../Badge/Badge";
import { Subscription } from "../../types/subscription";
import { BADGE_TYPE_MAP } from "../../constants/badgeTypeMap";

interface SubscriptionRowProps {
  subscription: Subscription;
}

const SubscriptionRow = ({ subscription }: SubscriptionRowProps) => {
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{subscription.id}</td>
      <td className={styles.cell}>{subscription.brand}</td>
      <td className={styles.cell}>{subscription.formula}</td>
      <td className={styles.cell}>
        <Badge type={BADGE_TYPE_MAP.status} value={subscription.status} />
      </td>
      <td className={styles.cell}>
        <Badge type={BADGE_TYPE_MAP.sync} value={subscription.sync} />
      </td>
    </tr>
  );
};

export default SubscriptionRow;
