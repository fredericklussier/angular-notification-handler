import { TestBed } from '@angular/core/testing';

import { LoggingService } from '../logging.service';

describe('LoggingService', () => {
  let service: LoggingService;
  const fixedDate = new Date(2020, 0, 1);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [LoggingService],
    });
    service = TestBed.inject(LoggingService);

    jasmine.clock().uninstall();
    jasmine.clock().install();
    jasmine.clock().mockDate(fixedDate);
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  [
    {
      name: 'log information',
      message: 'message to log',
      when: (message: string) => service.logInformation(message),
      methodeToSpy: 'log',
      expected: `Info: ${fixedDate.toLocaleString()}: LoggingService: message to log`
    }, {
      name: 'logIt information',
      message: 'message to log',
      when: (message: string) => service.logIt(message),
      methodeToSpy: 'log',
      expected: `${fixedDate.toLocaleString()}: LoggingService: message to log`
    }, {
      name: 'log error',
      message: 'error to log',
      when: (message: string) => service.logError(message),
      methodeToSpy: 'error',
      expected: `${fixedDate.toLocaleString()}: LoggingService: error to log`
    }, {
      name: 'log warning',
      message: 'warning to log',
      when: (message: string) => service.logWarning(message),
      methodeToSpy: 'warn',
      expected: `${fixedDate.toLocaleString()}: LoggingService: warning to log`
    }
  ].forEach((test) => {
    it(`${test.name} when given a message and requesting to ${test.methodeToSpy}`, () => {
      const consoleSpy = spyOn<any>(console, test.methodeToSpy);

      test.when(test.message);

      expect(consoleSpy).toHaveBeenCalledWith(test.expected);
    });
  });
});
