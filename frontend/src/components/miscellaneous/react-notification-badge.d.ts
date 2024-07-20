declare module "react-notification-badge" {
  import { ComponentType } from "react";

  export interface NotificationBadgeProps {
    count: number;
    effect?: any;
  }

  const NotificationBadge: ComponentType<NotificationBadgeProps>;
  export default NotificationBadge;
}
