import { TestBed } from '@angular/core/testing';

import { NotificationHandlerFacadeService } from './notification-handler-facade.service';
import { LoggingService } from './feature-log';
import { NotificationService } from './feature-notify';
import { NotificationStyle } from './feature-notify/notifycation-style.enum';

describe('NotificationHandlerFacadeService', () => {
  let facadeService: NotificationHandlerFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        NotificationHandlerFacadeService,
        {
          provide: LoggingService,
          useValue: {
            logInformation: () => true,
            logError: () => true,
            logIt: () => true,
            logWarning: () => true,
          },
        },
        {
          provide: NotificationService,
          useValue: {
            notify: () => true,
          }
        }
      ],
    });

    facadeService = TestBed.inject(NotificationHandlerFacadeService);

  });

  it('should be created', () => {
    expect(facadeService).toBeTruthy();
  });

  /**
   * test LoggingService
   */
  [
    {
      name: 'logInformation',
      act: () => facadeService.logInformation('I am an information description'),
      functionToSpy: 'logInformation'
    }, {
      name: 'logError',
      act: () => facadeService.logError('I am an error description'),
      functionToSpy: 'logError'
    }, {
      name: 'logIt',
      act: () => facadeService.logIt('I am a description'),
      functionToSpy: 'logIt'
    }, {
      name: 'logWarning',
      act: () => facadeService.logWarning('I am warning description'),
      functionToSpy: 'logWarning'
    },
  ].forEach((test) => {
    it(`should call ${test.name}, when given it`, () => {
      const mockLoggingService = TestBed.inject(LoggingService);
      const functionLoggingServiceSpy = spyOn<any>(mockLoggingService, test.functionToSpy);

      test.act();

      expect(functionLoggingServiceSpy).toHaveBeenCalled();
    });
  });

  it('should use injected LoggingService when log more messages', () => {
    const mockLoggingService = TestBed.inject(LoggingService);
    const functionLoggingServiceSpy = spyOn<any>(mockLoggingService, 'logWarning');

    facadeService.logWarning('I am warning description');
    facadeService.logWarning('I antoher warning description');

    expect(functionLoggingServiceSpy).toHaveBeenCalled();
  });

  /**
   * test NotificationService
   */
  [
    {
      name: 'alert',
      data: {message: 'duh!', kind: NotificationStyle.error},
    }, {
      name: 'open',
      data: {message: 'look an eagle.'},
    }, {
      name: 'inform',
      data: {message: 'this is a message', kind: NotificationStyle.info},
    }, {
      name: 'warn',
      data: {message: 'watch out!', kind: NotificationStyle.warn},
    }, {
      name: 'success',
      data: {message: 'congrat!!!', kind: NotificationStyle.success},
    },
  ].forEach((test) => {
    it(`should call ${test.name}, when notifing a(n) ${test.name}`, () => {
      const mockNotificationService = TestBed.inject(NotificationService);
      const functionNotificationServiceSpy = spyOn<any>(mockNotificationService, 'notify');

      facadeService.notify(test.data);

      expect(functionNotificationServiceSpy).toHaveBeenCalled();
    });
  });

  it('should use injected NotificationService when log more messages', () => {
    const mockNotificationService = TestBed.inject(NotificationService);
    const functionNotificationServiceSpy = spyOn<any>(mockNotificationService, 'notify');

    facadeService.notify({message: 'I am warning description'});
    facadeService.notify({message: 'I antoher warning description'});

    expect(functionNotificationServiceSpy).toHaveBeenCalled();
  });

});
