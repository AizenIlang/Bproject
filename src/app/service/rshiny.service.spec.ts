import { TestBed } from '@angular/core/testing';

import { RshinyService } from './rshiny.service';

describe('RshinyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RshinyService = TestBed.get(RshinyService);
    expect(service).toBeTruthy();
  });
});
