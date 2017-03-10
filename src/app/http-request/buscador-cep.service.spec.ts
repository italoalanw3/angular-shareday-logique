import { TestBed, inject } from '@angular/core/testing';

import { BuscadorCepService } from './buscador-cep.service';

describe('BuscadorCepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscadorCepService]
    });
  });

  it('should ...', inject([BuscadorCepService], (service: BuscadorCepService) => {
    expect(service).toBeTruthy();
  }));
});
