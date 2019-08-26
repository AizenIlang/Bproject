import { TestBed } from '@angular/core/testing';

import { MobilenotificationService } from './mobilenotification.service';

describe('MobilenotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobilenotificationService = TestBed.get(MobilenotificationService);
    expect(service).toBeTruthy();
  });
});
