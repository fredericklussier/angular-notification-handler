import { Injectable } from '@angular/core';
import { LoggingService } from './feature-log';
import { NotificationService, NotificationInfo } from './feature-notify';

@Injectable()
export class NotificationHandlerFacadeService {

  constructor(
    private loggingService: LoggingService,
    private notificationService: NotificationService
  ) {}

  /**
   * LoggingService
   */
  logInformation(message: string): any  {
    return this.loggingService.logInformation(message);
  }

  logError(message: string): void  {
    return this.loggingService.logError(message);
  }

  logWarning(message: string): void  {
    return this.loggingService.logWarning(message);
  }

  logIt(message: string): void  {
    return this.loggingService.logIt(message);
  }

  /**
   * NotificationService
   */

  notify(notificationInfo: NotificationInfo): void  {
    return this.notificationService.notify(notificationInfo);
  }
}
