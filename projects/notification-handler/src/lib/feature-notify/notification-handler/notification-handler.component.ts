import { Component, Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { NotificationInfo } from '../notification-Info.interface';

// TODO ngMAterial change the way to work with color (.inform => background-color: primary; )
@Component({
  selector: 'ngy-notification-handler',
  templateUrl: './notification-handler.component.html',
  styleUrls: ['./notification-handler.component.scss'],
})
export class NotificationHandlerComponent {

  constructor(
    public snackBarRef: MatSnackBarRef<NotificationHandlerComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: NotificationInfo
  ) {}
}
