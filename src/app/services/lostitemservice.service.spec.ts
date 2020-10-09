import { TestBed } from '@angular/core/testing';

import { LostitemserviceService } from './lostitemservice.service';

describe('LostitemserviceService', () => {
  let service: LostitemserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LostitemserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
