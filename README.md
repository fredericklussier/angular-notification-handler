# AngularNotificationHandler

[![buddy pipeline](https://app.buddy.works/fredericklussier/angular-notification-handler/pipelines/pipeline/269758/badge.svg?token=2a8064fac4f38ea93407e1bd644ba3433cec0fde984bc244aac571a40ecd9d67 "buddy pipeline")](https://app.buddy.works/fredericklussier/angular-notification-handler/pipelines/pipeline/269758)

Notification handler is a common angular lib to provide simple notifications, alerts and logging system.

It also kept last notifications in a bank, so the user can read refere them later. And can sent some notification and log to a logging system like Firebase analytics events.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Install
```
npm install angular-notification-handler
```

## Getting Started
You need to import the NotificationHandlerModule by adding the following lines to your xyz.module.ts file.

```javascript
import { NotificationHandlerModule } from 'notification-handler';
...
@NgModule ({...
  imports: [...,
    NotificationHandlerModule,
...]
})
```

Add any notification in your code.
```javascript
...
import { NotificationHandlerFacadeService, NotificationStyle } from 'notification-handler';
...

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'sample';

  constructor(
    public notification: NotificationHandlerFacadeService,
  ){}

  ngOnInit(): void{
    this.notification.notify({message: 'Greetings', kind: NotificationStyle.success});
  }
}
```

## API
```javascript
import { NotificationHandlerFacadeService, NotificationStyle } from 'notification-handler';
```
### Methods
`notify(notificationInfo: NotificationInfo): void`

displaying a message box to the user.

to be continued ...

## Theming

This module use the angular material theming :grin:.

Some extra configuration are needed if you want to use your theme. Just include this:

```scss
//import lib and component themes
@import 'notification-handler/notification-handler-lib.theme.scss';
@include notifier-handler-lib-theme($theme);
```
