import styles from "./SubscriptionsPages.module.css";
import SubscriptionsTable from "../../components/SubscriptionsTable/SubscriptionsTable";
import { parseSubscriptions } from "../../utils/parseSubsctiptions/parseSubscriptions";
import { APP_LABELS } from "../../constants/labels/appLabels";
import iconSource from "../../assets/icons/icon-source.svg";
import { SUBSCRIPTION_PAGE } from "../../constants/labels/subscriptionPage";

const SubscriptionsPage = () => {
  const subscriptions = parseSubscriptions();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>{APP_LABELS.TITLE}</h1>
        <SubscriptionsTable subscriptions={subscriptions} />
        <p className={styles.source}>
          <img src={iconSource} alt="icon" />
          {SUBSCRIPTION_PAGE.SOURCE}
        </p>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
