import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalpatientsComponent } from './totalpatients.component';

describe('TotalpatientsComponent', () => {
  let component: TotalpatientsComponent;
  let fixture: ComponentFixture<TotalpatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalpatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
