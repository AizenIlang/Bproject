import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportbyageComponent } from './reportbyage.component';

describe('ReportbyageComponent', () => {
  let component: ReportbyageComponent;
  let fixture: ComponentFixture<ReportbyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportbyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportbyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
