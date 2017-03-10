import { TestBed, inject } from '@angular/core/testing';

import { MelhorTimeService } from './melhor-time.service';

describe('MelhorTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MelhorTimeService]
    });
  });

  it('should ...', inject([MelhorTimeService], (service: MelhorTimeService) => {
    expect(service).toBeTruthy();
  }));
});
