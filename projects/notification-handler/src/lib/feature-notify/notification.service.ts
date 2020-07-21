import { Injectable } from '@angular/core';
import { NotificationInfo } from './notification-Info.interface';
import { MatSnackBar } from '@angular/material//snack-bar';
import { NotificationHandlerComponent } from './notification-handler/notification-handler.component';
import { NotificationStyle } from './notifycation-style.enum';

const dismissibleNotificationStyle = [
  NotificationStyle.error,
  NotificationStyle.warn,
];

@Injectable()
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  notify(notificationInfo: NotificationInfo): void {
    const data = this.setDateWithDefault(notificationInfo);
    const options = this.setOptionsWithDefault(notificationInfo);

    this.snackBar.openFromComponent(NotificationHandlerComponent, {
      data,
      ...options,
    });
  }

  private setDateWithDefault(notificationInfo: NotificationInfo): any {
    return {
      message: notificationInfo.message,
      allowDismiss: notificationInfo.allowDismiss || dismissibleNotificationStyle.toString().includes(notificationInfo.kind),
    };
  }

  private setOptionsWithDefault(
    notificationInfo: NotificationInfo
  ): any {
    const options = {
      ...{
        duration: 2500,
        ...notificationInfo.options,
      },
    };
    options.panelClass = notificationInfo.kind
      ? [notificationInfo.kind]
      : [NotificationStyle.default];

    options.panelClass = notificationInfo.options?.panelClass
      ? [...options.panelClass, ...notificationInfo.options.panelClass]
      : options.panelClass;

    return options;
  }
}
