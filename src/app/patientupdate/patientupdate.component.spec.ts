import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientupdateComponent } from './patientupdate.component';

describe('PatientupdateComponent', () => {
  let component: PatientupdateComponent;
  let fixture: ComponentFixture<PatientupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
