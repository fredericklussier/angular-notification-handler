import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { NotificationHandlerComponent } from './feature-notify/notification-handler/notification-handler.component';
import { GlobalErrorHandler } from './global-error-handler';
import { NotificationHandlerFacadeService } from './notification-handler-facade.service';
import { LoggingService } from './feature-log';
import { NotificationService } from './feature-notify';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NotificationHandlerComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    LoggingService,
    NotificationService,
    NotificationHandlerFacadeService
  ],
  exports: [ ],
  entryComponents: [NotificationHandlerComponent]
})
export class NotificationHandlerModule { }
