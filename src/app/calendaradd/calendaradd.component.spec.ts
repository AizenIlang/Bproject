import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendaraddComponent } from './calendaradd.component';

describe('CalendaraddComponent', () => {
  let component: CalendaraddComponent;
  let fixture: ComponentFixture<CalendaraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendaraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendaraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
