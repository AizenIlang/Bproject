import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendareditComponent } from './calendaredit.component';

describe('CalendareditComponent', () => {
  let component: CalendareditComponent;
  let fixture: ComponentFixture<CalendareditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendareditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendareditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
