import styles from "./Badge.module.css";
import { BADGE_LABELS, BadgeType, BadgeValue } from "../../constants/labels/badgeLabels";
import iconTick from "../../assets/icons/icon-tick.svg";
import iconWarning from "../../assets/icons/icon-warning.svg";
import iconTriangleWarning from "../../assets/icons/icon-alert-triangle.svg";
import { SyncStatus } from "../../types/subscription";
import { BADGE_TYPE_MAP } from "../../constants/badgeTypeMap";

interface BadgeProps<T extends BadgeType> {
  type: T;
  value: BadgeValue<T>;
}

const getIcon = <T extends BadgeType>(value: BadgeValue<T>) => {
  switch (value) {
    case SyncStatus.IN_SYNC:
      return iconTick;
    case SyncStatus.OUT_OF_SYNC:
      return iconWarning;
    case SyncStatus.NOT_FOUND_S2:
    case SyncStatus.NOT_FOUND_TEMPTATION:
      return iconTriangleWarning;
    default:
      return iconTick;
  }
};

const Badge = <T extends BadgeType>({ type, value }: BadgeProps<T>) => {
  const label = String(BADGE_LABELS[type]?.[value] ?? value);
  const typeClass = styles[String(value).toLowerCase()] || "";
  const icon = getIcon(value);

  return (
    <span className={`${styles.badge} ${typeClass}`}>
      {type === BADGE_TYPE_MAP.sync && <img src={icon} alt="icon" />}
      {label}
    </span>
  );
};

export default Badge;
