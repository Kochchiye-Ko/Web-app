import { TestBed } from '@angular/core/testing';

import { TrainserviceService } from './trainservice.service';

describe('TrainserviceService', () => {
  let service: TrainserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
