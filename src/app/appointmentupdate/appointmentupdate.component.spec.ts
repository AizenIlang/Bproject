import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentupdateComponent } from './appointmentupdate.component';

describe('AppointmentupdateComponent', () => {
  let component: AppointmentupdateComponent;
  let fixture: ComponentFixture<AppointmentupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
