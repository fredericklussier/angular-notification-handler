import { TestBed } from '@angular/core/testing';

import { NotificationService } from '../notification.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationHandlerComponent } from '../notification-handler/notification-handler.component';
import { NotificationStyle } from '../notifycation-style.enum';

describe('NotificationService', () => {
  let service: NotificationService;
  let matSnackBarSpy: jasmine.Spy<never>;
  let mockMatSnackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [
        NotificationService,
        {
          provide: MatSnackBar,
          useValue: {
            openFromComponent: () => true,
          },
        },
      ],
    });

    service = TestBed.inject(NotificationService);

    mockMatSnackBar = TestBed.inject(MatSnackBar);
    matSnackBarSpy = spyOn<any>(mockMatSnackBar, 'openFromComponent');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  /**
   * Test all kinds of notification
   */
  [
    {
      name: 'success',
      data: {
        message: 'this is a successful message',
        allowDismiss: true,
        kind: NotificationStyle.success
      },
      expected: {
        data: {
          message: 'this is a successful message',
          allowDismiss: true,
        },
        duration: 2500,
        panelClass: ['success-notification-overlay'],
      },
    }, {
      name: 'alert',
      data: {
        message: 'this is an error message',
        allowDismiss: true,
        kind: NotificationStyle.error,
      },
      expected: {
        data: {
          message: 'this is an error message',
          allowDismiss: true,
        },
        duration: 2500,
        panelClass: ['error-notification-overlay'],
      },
    }, {
      name: 'inform',
      data: {
        message: 'this is a message',
        kind: NotificationStyle.info
      },
      expected: {
        data: {
          message: 'this is a message',
          allowDismiss: false,
        },
        duration: 2500,
        panelClass: ['info-notification-overlay'],
      },
    }, {
      name: 'warning',
      data: {
        message: 'this is a warning message',
        allowDismiss: true,
        kind: NotificationStyle.warn,
      },
      expected: {
        data: {
          message: 'this is a warning message',
          allowDismiss: true,
        },
        duration: 2500,
        panelClass: ['warning-notification-overlay'],
      },
    }, {
      name: 'default and adding my class',
      data: {
        message: 'this is a message',
        options: {
          duration: 5000,
          panelClass: ['MyClass']
        }
      },
      expected: {
        data: {
          message: 'this is a message',
          allowDismiss: false,
        },
        duration: 5000,
        panelClass: ['default-notification-overlay', 'MyClass'],
      },
    },
  ].forEach((test) => {
    it(`should open snackBar using ${test.name} style when resquesting an ${test.name}`, () => {
      // action
      service.notify(test.data);

      // assert
      expect(mockMatSnackBar.openFromComponent).toHaveBeenCalledWith(
        NotificationHandlerComponent,
        test.expected
      );
    });
  });
});
