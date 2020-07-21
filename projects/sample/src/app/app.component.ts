import { Component, OnInit } from '@angular/core';
import { NotificationHandlerFacadeService, NotificationStyle } from 'notification-handler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'sample';

  get notificationStyle(): any { return NotificationStyle; }

  constructor(
    public notificationHandler: NotificationHandlerFacadeService,
  ){}

  ngOnInit(): void{
    this.notificationHandler.notify({message: 'greetings', kind: NotificationStyle.success});
  }
}
