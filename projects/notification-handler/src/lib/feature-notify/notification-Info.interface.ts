import { NotificationStyle } from './notifycation-style.enum';

export interface NotificationInfo {
  message: string;
  allowDismiss?: boolean;
  kind?: NotificationStyle;
  options?: {
    duration?: number;
    panelClass?: string[];
    [propName: string]: any;
  };
}
