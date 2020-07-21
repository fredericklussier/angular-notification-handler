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

  it('log the message when given a message and requesting to log aa information', () => {
    const message = 'message to log';
    const expected = `Info: ${fixedDate.toLocaleString()}: LoggingService: ${message}`;
    const consoleSpy = spyOn<any>(console, 'log');

    service.logInformation(message);

    expect(consoleSpy).toHaveBeenCalledWith(expected);
  });

  it('log the message when given a message and requesting a log', () => {
    const message = 'message to log';
    const expected = `${fixedDate.toLocaleString()}: LoggingService: ${message}`;
    const consoleSpy = spyOn<any>(console, 'log');

    service.logIt(message);

    expect(consoleSpy).toHaveBeenCalledWith(expected);
  });

  it('log an error message when given a message and requesting an error', () => {
    const message = 'message to log';
    const expected = `${fixedDate.toLocaleString()}: LoggingService: ${message}`;
    const consoleSpy = spyOn<any>(console, 'error');

    service.logError(message);

    expect(consoleSpy).toHaveBeenCalledWith(expected);
  });

  it('log a warning message when given a message and requesting a warning', () => {
    const message = 'message to log';
    const expected = `${fixedDate.toLocaleString()}: LoggingService: ${message}`;
    const consoleSpy = spyOn<any>(console, 'warn');

    service.logWarning(message);

    expect(consoleSpy).toHaveBeenCalledWith(expected);
  });
});
