import { TestBed } from '@angular/core/testing';

import { TrainsheduleService } from './trainshedule.service';

describe('TrainsheduleService', () => {
  let service: TrainsheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainsheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
