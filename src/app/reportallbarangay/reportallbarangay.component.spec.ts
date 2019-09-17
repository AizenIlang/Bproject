import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportallbarangayComponent } from './reportallbarangay.component';

describe('ReportallbarangayComponent', () => {
  let component: ReportallbarangayComponent;
  let fixture: ComponentFixture<ReportallbarangayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportallbarangayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportallbarangayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
