import { TestBed, inject } from '@angular/core/testing';

import { FutebolService } from './futebol.service';

describe('FutebolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FutebolService]
    });
  });

  it('should ...', inject([FutebolService], (service: FutebolService) => {
    expect(service).toBeTruthy();
  }));
});
