import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService } from './feature-log/logging.service';
import { NotificationService } from './feature-notify/notification.service';

// TODO active this module

interface ErrorInfo {
  message: string;
  stackTrace: string;
}

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse): void {

    const logger = this.injector.get<LoggingService>(LoggingService);
    const notifier = this.injector.get<NotificationService>(NotificationService);

    let errorDesc: ErrorInfo;
    if (error instanceof HttpErrorResponse) { // Server error
      errorDesc = this.getServerError(error);
    } else { // Client Error
      errorDesc = this.getClientError(error);
    }
    notifier.notify({message: errorDesc.message});

    // Always log errors
    logger.logError(errorDesc.message);
  }

  private getServerError(error: HttpErrorResponse): ErrorInfo {
    if (navigator.onLine) {
      return { message: error.message, stackTrace: error.error };
    } else {
      return { message: 'No Internet Connection', stackTrace: '' };
    }
  }

  private getClientError(error: Error): ErrorInfo {
    if (error.message) {
      return { message: error.message, stackTrace: error.stack };
    } else {
      return { message: error.toString(), stackTrace: '' };
    }
  }
}
