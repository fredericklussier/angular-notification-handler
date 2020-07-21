import { Injectable } from '@angular/core';

// TODO: Log error to the server like Rollbar or Crashlytics
// TODO: treat the stack when error occurs
// TODO: set the application name

@Injectable()
export class LoggingService {
  logError(message: string): void {
    console.error(this.formatMessage(message));
  }

  logWarning(message: string): void {
    console.warn(this.formatMessage(message));
  }

  logInformation(message: string): void {
    console.log(`Info: ${this.formatMessage(message)}`);
  }

  logIt(message: string): void {
    console.log(this.formatMessage(message));
  }

  private formatMessage(message: string): string {
    const now = new Date();
    return `${now.toLocaleString()}: LoggingService: ${message}`;
  }
}
