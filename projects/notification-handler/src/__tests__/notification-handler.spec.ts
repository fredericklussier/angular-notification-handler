import { TestBed } from '@angular/core/testing';

import {
  NotificationHandlerFacadeService,
  NotificationHandlerModule,
  NotificationStyle,
  NotificationHandlerInfo,
} from '../public-api';
import { MatSnackBar } from '@angular/material/snack-bar';

// TODO all tests mock console and
describe('NotificationHandler e2e', () => {
  let facadeService: NotificationHandlerFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotificationHandlerModule],
    });

    facadeService = TestBed.inject(NotificationHandlerFacadeService);
  });

  it('should be created', () => {
    expect(facadeService).toBeTruthy();
  });

  it('Given a message when log information then log the message', () => {
    const message = 'message to log';
    const consoleSpy = spyOn<any>(console, 'log');

    facadeService.logInformation(message);

    expect(consoleSpy).toHaveBeenCalled();
  });

  it('Given an information message when asking to notify it then toast the message to the user', () => {
    const mockMatSnackBar = TestBed.inject(MatSnackBar);
    const matSnackBarSpy = spyOn<any>(mockMatSnackBar, 'openFromComponent');

    const data: NotificationHandlerInfo = { message: 'message to show' };

    facadeService.notify(data);

    expect(matSnackBarSpy).toHaveBeenCalled();
  });

  it('Given an error message when asking to notify it then toast the error message to the user', () => {
    const mockMatSnackBar = TestBed.inject(MatSnackBar);
    const matSnackBarSpy = spyOn<any>(mockMatSnackBar, 'openFromComponent');

    const data: NotificationHandlerInfo = {
      message: 'error message to show',
      kind: NotificationStyle.error,
    };

    facadeService.notify(data);

    expect(matSnackBarSpy).toHaveBeenCalled();
  });
});
