import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { NotificationHandlerComponent } from '../notification-handler/notification-handler.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// TODO test color once it is compatible.

describe('NotificationHandlerComponent', () => {
  let component: NotificationHandlerComponent;
  let fixture: ComponentFixture<NotificationHandlerComponent>;
  let nativeElement: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationHandlerComponent],
      imports: [MatSnackBarModule, BrowserAnimationsModule, MatIconModule],
      providers: [
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: {
            data: {
              message: 'message to display',
              allowDismiss: true,
            },
          },
        },
        {
          provide: MatSnackBarRef,
          useValue: { dismiss: () => {} },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationHandlerComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display only the message when given nothing as icon and setting allowDismiss to false', () => {
    // arrange
    component.data = {
      message: 'message to display',
      allowDismiss: false,
    };
    // action
    fixture.detectChanges();

    // assert
    expect(nativeElement.querySelectorAll('mat-icon').length).toEqual(0);
  });

  it('should display dismiss button when given allowDismiss to true', () => {
    // arrange
    component.data = {
      message: 'message to display',
      allowDismiss: true,
    };
    // action
    fixture.detectChanges();

    // assert
    expect(debugElement.queryAll(By.css('div.dismiss')).length).toEqual(1);
  });

  it('should not display dismiss button when given allowDismiss to false', () => {
    // arrange
    component.data = {
      message: 'message to display',
      allowDismiss: false,
    };
    // action
    fixture.detectChanges();

    // assert
    expect(debugElement.queryAll(By.css('div.dismiss')).length).toEqual(0);
  });

  it('should display dismiss a close icon in the dismiss zone when given allowDismiss to true', () => {
    // arrange
    component.data = {
      message: 'message to display',
      allowDismiss: true,
    };
    // action
    fixture.detectChanges();

    // assert
    expect(nativeElement.querySelectorAll('mat-icon')[0].textContent).toEqual('close');
  });
});

// this is what it generate
// <div id="root1" _nghost-a-c36="" ng-version="10.0.3">
//   <div _ngcontent-a-c36="" fxlayout="row" fxlayoutalign="start center">
//     <mat-icon _ngcontent-a-c36="" role="img" matsuffix="" class="mat-icon notranslate material-icons mat-primary" aria-hidden="true" ng-reflect-color="primary">
//     error
//     </mat-icon>
//     <!--bindings={"ng-reflect-ng-if": "true"}-->
//     <div _ngcontent-a-c36="" style="margin-left: 8px; margin-right: 8px;">
//       message to display
//     </div>
//     <div _ngcontent-a-c36="" class="dismiss">
//       <button _ngcontent-a-c36="" mat-icon-button="">
//         <mat-icon _ngcontent-a-c36="" role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true">
//         close
//         </mat-icon>
//       </button>
//     </div>
//     <!--bindings={"ng-reflect-ng-if": "true"}-->
//   </div>
// </div>
