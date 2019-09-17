import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportinterpretationComponent } from './reportinterpretation.component';

describe('ReportinterpretationComponent', () => {
  let component: ReportinterpretationComponent;
  let fixture: ComponentFixture<ReportinterpretationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportinterpretationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportinterpretationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
