import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestuserComponent } from './latestuser.component';

describe('LatestuserComponent', () => {
  let component: LatestuserComponent;
  let fixture: ComponentFixture<LatestuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
